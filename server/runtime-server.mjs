import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

const PORT = 4312;
const HOST = "127.0.0.1";
const EXECUTION_TIMEOUT_MS = 6000;

const toolCandidates = {
  Python: ["python"],
  Java: ["javac", "java"],
  C: ["gcc"],
  "C++": ["g++"],
  Bash: ["bash"],
  NodeJS: ["node"],
  JavaScript: ["node"],
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  res.end(JSON.stringify(payload));
}

function collectRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function runProcess(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      stdio: "pipe",
      shell: false,
    });

    let stdout = "";
    let stderr = "";
    let finished = false;

    const timeout = setTimeout(() => {
      if (finished) return;
      finished = true;
      child.kill();
      reject(new Error(`Execution timed out after ${EXECUTION_TIMEOUT_MS}ms.`));
    }, EXECUTION_TIMEOUT_MS);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      reject(error);
    });

    child.on("close", (code) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      resolve({ code: code ?? 0, stdout, stderr });
    });

    if (typeof options.stdin === "string") {
      child.stdin.write(options.stdin);
    }
    child.stdin.end();
  });
}

async function commandExists(command) {
  try {
    await runProcess(command, ["--version"]);
    return true;
  } catch {
    return false;
  }
}

async function getRuntimeStatus() {
  const entries = await Promise.all(
    Object.entries(toolCandidates).map(async ([language, commands]) => {
      const checks = await Promise.all(commands.map((command) => commandExists(command)));
      return [language, checks.every(Boolean)];
    }),
  );

  return Object.fromEntries(entries);
}

async function withTempDir(prefix, task) {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), prefix));
  try {
    return await task(tempDir);
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

function normalizeOutput(stdout, stderr) {
  const merged = [stdout.trimEnd(), stderr.trimEnd()].filter(Boolean).join("\n");
  return merged ? merged.split(/\r?\n/) : ["(no output)"];
}

async function executeNode(code, stdin) {
  return withTempDir("studentstack-node-", async (tempDir) => {
    const filePath = path.join(tempDir, "main.js");
    await fs.writeFile(filePath, code, "utf8");
    const result = await runProcess("node", [filePath], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executePython(code, stdin) {
  return withTempDir("studentstack-python-", async (tempDir) => {
    const filePath = path.join(tempDir, "main.py");
    await fs.writeFile(filePath, code, "utf8");
    const result = await runProcess("python", [filePath], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executeBash(code, stdin) {
  return withTempDir("studentstack-bash-", async (tempDir) => {
    const filePath = path.join(tempDir, "main.sh");
    await fs.writeFile(filePath, code, "utf8");
    const result = await runProcess("bash", [filePath], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executeC(code, stdin) {
  return withTempDir("studentstack-c-", async (tempDir) => {
    const sourcePath = path.join(tempDir, "main.c");
    const exePath = path.join(tempDir, "main.exe");
    await fs.writeFile(sourcePath, code, "utf8");
    const compile = await runProcess("gcc", [sourcePath, "-o", exePath], { cwd: tempDir });
    if (compile.code !== 0) return normalizeOutput(compile.stdout, compile.stderr);
    const result = await runProcess(exePath, [], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executeCpp(code, stdin) {
  return withTempDir("studentstack-cpp-", async (tempDir) => {
    const sourcePath = path.join(tempDir, "main.cpp");
    const exePath = path.join(tempDir, "main.exe");
    await fs.writeFile(sourcePath, code, "utf8");
    const compile = await runProcess("g++", [sourcePath, "-o", exePath], { cwd: tempDir });
    if (compile.code !== 0) return normalizeOutput(compile.stdout, compile.stderr);
    const result = await runProcess(exePath, [], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executeJava(code, stdin) {
  return withTempDir("studentstack-java-", async (tempDir) => {
    const classMatch = code.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/);
    const className = classMatch?.[1] ?? "Main";
    const sourcePath = path.join(tempDir, `${className}.java`);
    await fs.writeFile(sourcePath, code, "utf8");
    const compile = await runProcess("javac", [sourcePath], { cwd: tempDir });
    if (compile.code !== 0) return normalizeOutput(compile.stdout, compile.stderr);
    const result = await runProcess("java", ["-cp", tempDir, className], { cwd: tempDir, stdin });
    return normalizeOutput(result.stdout, result.stderr);
  });
}

async function executeLocal(language, code, stdin) {
  if (language === "JavaScript" || language === "NodeJS") return executeNode(code, stdin);
  if (language === "Python") return executePython(code, stdin);
  if (language === "Java") return executeJava(code, stdin);
  if (language === "C") return executeC(code, stdin);
  if (language === "C++") return executeCpp(code, stdin);
  if (language === "Bash") return executeBash(code, stdin);
  throw new Error(`No local runtime configured for ${language}.`);
}

export async function createRuntimeServer() {
  const status = await getRuntimeStatus();

  const server = createServer(async (req, res) => {
    if (!req.url) {
      sendJson(res, 404, { error: "Missing request URL." });
      return;
    }

    if (req.method === "OPTIONS") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "GET" && req.url === "/api/runtime/status") {
      sendJson(res, 200, { available: status });
      return;
    }

    if (req.method === "POST" && req.url === "/api/runtime/execute") {
      try {
        const body = await collectRequestBody(req);
        const payload = JSON.parse(body || "{}");
        const { language, code, stdin = "" } = payload;

        if (!language || !code) {
          sendJson(res, 400, { error: "language and code are required." });
          return;
        }

        if (!status[language]) {
          sendJson(res, 400, { error: `Local runtime not available for ${language}.` });
          return;
        }

        const lines = await executeLocal(language, code, stdin);
        sendJson(res, 200, { lines });
        return;
      } catch (error) {
        sendJson(res, 500, { error: error instanceof Error ? error.message : String(error) });
        return;
      }
    }

    sendJson(res, 404, { error: "Not found." });
  });

  return { server, status };
}

export async function startRuntimeServer() {
  const { server, status } = await createRuntimeServer();
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, HOST, () => {
      console.log(`[runtime] listening on http://${HOST}:${PORT}`);
      console.log(`[runtime] available: ${Object.entries(status).filter(([, ok]) => ok).map(([language]) => language).join(", ")}`);
      resolve({ server, status });
    });
  });
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1].replace(/\\/g, "/")}`).href) {
  startRuntimeServer().catch((error) => {
    if (error && typeof error === "object" && "code" in error && error.code === "EADDRINUSE") {
      console.log(`[runtime] already running on http://${HOST}:${PORT}`);
      process.exit(0);
    }
    console.error("[runtime] failed to start:", error);
    process.exit(1);
  });
}
