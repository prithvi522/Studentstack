import { useEffect, useRef } from "react";

const PISTON_ENDPOINT = "https://emkc.org/api/v2/piston/execute";

const LANGUAGES = [
  { id: "python", label: "Python", version: "3.10.0", template: 'print("Hello from Python")\n' },
  { id: "javascript", label: "JavaScript", version: "18.15.0", template: 'console.log("Hello from JavaScript")\n' },
  { id: "c", label: "C", version: "10.2.0", template: '#include <stdio.h>\n\nint main(){\n  printf("Hello from C\\n");\n  return 0;\n}\n' },
  { id: "cpp", label: "C++", version: "10.2.0", template: '#include <iostream>\nusing namespace std;\n\nint main(){\n  cout << "Hello from C++" << endl;\n  return 0;\n}\n' },
  { id: "java", label: "Java", version: "15.0.2", template: "public class Main {\n  public static void main(String[] args){\n    System.out.println(\"Hello from Java\");\n  }\n}\n" },
  { id: "go", label: "Go", version: "1.16.2", template: 'package main\n\nimport "fmt"\n\nfunc main(){\n  fmt.Println("Hello from Go")\n}\n' },
  { id: "php", label: "PHP", version: "8.2.3", template: "<?php\necho \"Hello from PHP\\n\";\n" },
  { id: "ruby", label: "Ruby", version: "3.0.1", template: "puts 'Hello from Ruby'\n" },
  { id: "bash", label: "Bash", version: "5.1.0", template: "echo \"Hello from Bash\"\n" },
];

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLang(id: string) {
  return LANGUAGES.find((l) => l.id === id) || LANGUAGES[0];
}

async function runOnPiston({ language, version, code, stdin }: { language: string; version: string; code: string; stdin?: string }) {
  const payload = {
    language,
    version,
    files: [{ name: language === "java" ? "Main.java" : "main", content: code }],
    stdin: stdin || "",
  };

  const res = await fetch(PISTON_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Runner request failed (${res.status}). ${text}`);
  }

  return await res.json();
}

export default function Terminal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const root = rootRef.current;
    const savedLang = localStorage.getItem("studentstack_terminal_lang") || "python";
    const lang = getLang(savedLang);

    root.innerHTML = `
      <div class="terminal">
        <div class="terminal-header">
          <div>
            <div class="terminal-title">Practice Terminal</div>
            <div class="terminal-meta">
              <span class="terminal-pill" data-terminal-status>Ready</span>
              <span class="terminal-pill" data-terminal-provider>Runner: Piston</span>
            </div>
          </div>

          <div class="terminal-controls">
            <select aria-label="Select language" data-terminal-lang>
              ${LANGUAGES.map(
                (l) => `<option value="${escapeHtml(l.id)}">${escapeHtml(l.label)}</option>`
              ).join("")}
            </select>
            <button class="terminal-run" type="button" data-terminal-run>Run</button>
          </div>
        </div>

        <div class="terminal-body">
          <div class="terminal-label">Code</div>
          <textarea class="terminal-code" spellcheck="false" data-terminal-code></textarea>

          <div class="terminal-label">Input (stdin)</div>
          <textarea class="terminal-stdin" spellcheck="false" data-terminal-stdin placeholder="Optional input..."></textarea>

          <div class="terminal-label">Output</div>
          <div class="terminal-output" data-terminal-output></div>
        </div>
      </div>
    `;

    const langSelect = root.querySelector("[data-terminal-lang]") as HTMLSelectElement;
    const runBtn = root.querySelector("[data-terminal-run]") as HTMLButtonElement;
    const statusEl = root.querySelector("[data-terminal-status]") as HTMLElement;
    const codeEl = root.querySelector("[data-terminal-code]") as HTMLTextAreaElement;
    const stdinEl = root.querySelector("[data-terminal-stdin]") as HTMLTextAreaElement;
    const outEl = root.querySelector("[data-terminal-output]") as HTMLElement;

    function setStatus(text: string) {
      statusEl.textContent = text;
    }

    function setOutput(text: string) {
      outEl.textContent = text || "";
    }

    function setLanguage(nextId: string, { keepCode } = { keepCode: false }) {
      const next = getLang(nextId);
      langSelect.value = next.id;
      localStorage.setItem("studentstack_terminal_lang", next.id);
      if (!keepCode) codeEl.value = next.template;
      setOutput("");
      setStatus("Ready");
    }

    langSelect.addEventListener("change", () => setLanguage(langSelect.value, { keepCode: false }));

    async function run() {
      const selected = getLang(langSelect.value);
      const code = codeEl.value || "";
      const stdin = stdinEl.value || "";

      setStatus("Running...");
      runBtn.disabled = true;
      setOutput("");

      try {
        const result = await runOnPiston({
          language: selected.id,
          version: selected.version,
          code,
          stdin,
        });

        const stdout = result?.run?.stdout || "";
        const stderr = result?.run?.stderr || "";
        const codeNum = result?.run?.code;

        const merged =
          (stdout ? stdout : "") +
          (stderr ? (stdout ? "\n" : "") + stderr : "") +
          (stdout || stderr ? "" : "No output.");

        setOutput(merged);
        setStatus(codeNum === 0 ? "Done" : `Exit ${codeNum ?? "?"}`);
      } catch (e) {
        setOutput(String((e as Error)?.message || e));
        setStatus("Error");
      } finally {
        runBtn.disabled = false;
      }
    }

    runBtn.addEventListener("click", run);

    codeEl.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        run();
      }
    });

    setLanguage(lang.id, { keepCode: false });
  }, []);

  return <div ref={rootRef}></div>;
}