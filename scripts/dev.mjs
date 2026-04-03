import { spawn } from "node:child_process";

const isWindows = process.platform === "win32";
const viteCommand = isWindows ? "npm run vite:dev" : "npm";
const viteArgs = isWindows ? [] : ["run", "vite:dev"];

const runtime = spawn(process.execPath, ["server/runtime-server.mjs"], {
  stdio: "inherit",
  cwd: process.cwd(),
});

const vite = spawn(viteCommand, viteArgs, {
  stdio: "inherit",
  cwd: process.cwd(),
  shell: isWindows,
});

const shutdown = () => {
  runtime.kill();
  vite.kill();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

runtime.on("exit", (code) => {
  if (code && code !== 0) {
    vite.kill();
    process.exit(code);
  }
});

vite.on("exit", (code) => {
  runtime.kill();
  process.exit(code ?? 0);
});
