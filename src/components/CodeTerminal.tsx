import { useEffect, useRef, useState } from "react";
import { ChevronDown, Copy, Play, RotateCcw, Terminal, Trash2 } from "lucide-react";
import { courseNames } from "@/data";
import {
  executeProgram,
  LANGUAGE_CONFIG,
  type Language,
  type ProgramResult,
} from "@/lib/offlineTerminal";

const LANGUAGE_ORDER = courseNames as Language[];
const LOCAL_RUNTIME_LANGUAGES: Language[] = ["JavaScript", "NodeJS", "Python", "Java", "C", "C++", "Bash"];

const baseIconButtonClass =
  "rounded-md border border-white/15 bg-white/10 p-2 text-slate-200 shadow-sm transition hover:bg-white/20 hover:text-white";
const menuButtonClass =
  "flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-mono text-slate-100 shadow-sm transition hover:bg-white/20";
const actionButtonClass =
  "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-md transition disabled:opacity-50";
const secondaryButtonClass =
  "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:bg-white/20";
const previewBaseStyles = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    min-height: 100%;
    background: #ffffff;
    color: #0f172a;
  }
  body {
    padding: 16px;
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }
  img, svg, video, canvas {
    max-width: 100%;
    height: auto;
  }
`;

function getLanguageConfig(language: Language) {
  return LANGUAGE_CONFIG[language];
}

function buildPreviewDocument(language: Language, previewDoc: string) {
  if (!previewDoc) return previewDoc;

  if (language === "HTML") {
    if (/<head[\s>]/i.test(previewDoc)) {
      return previewDoc.replace(/<head(\s*[^>]*)>/i, `<head$1><style>${previewBaseStyles}</style>`);
    }

    if (/<html[\s>]/i.test(previewDoc)) {
      return previewDoc.replace(
        /<html(\s*[^>]*)>/i,
        `<html$1><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style>${previewBaseStyles}</style></head>`,
      );
    }

    return `<!DOCTYPE html><html><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style>${previewBaseStyles}</style></head><body>${previewDoc}</body></html>`;
  }

  return previewDoc;
}

function getInputHint(language: Language) {
  if (language === "JavaScript" || language === "NodeJS") {
    return "Use input() in code and add one value per line here";
  }
  if (language === "HTML" || language === "CSS" || language === "SQL") {
    return "This mode does not need stdin for the default example";
  }
  return "Add user input here, one value per line, for your offline terminal program";
}

function getInputPlaceholder(language: Language) {
  if (language === "Python") return "Example input:\n5\n5";
  if (language === "Java") return "Example input:\n5\n5";
  if (language === "C" || language === "C++" || language === "C#") return "Example input:\n5\n5";
  if (language === "PHP" || language === "Ruby" || language === "Go" || language === "Bash") {
    return "Example input:\n5\n5";
  }
  return "Example input:\n5\n7";
}

function languageSupportsInput(language: Language) {
  return !["HTML", "CSS", "SQL"].includes(language);
}

function codeNeedsInput(language: Language, code: string) {
  if (!languageSupportsInput(language)) return false;

  const source = code.toLowerCase();

  if (language === "JavaScript" || language === "NodeJS") return source.includes("input(");
  if (language === "Python") return source.includes("input(");
  if (language === "Java") return source.includes("nextint(") || source.includes("nextline(") || source.includes("scanner");
  if (language === "C") return source.includes("scanf(");
  if (language === "C++") return source.includes("cin >>");
  if (language === "C#") return source.includes("console.readline(");
  if (language === "PHP") return source.includes("fgets(stdin)");
  if (language === "Ruby") return source.includes("gets");
  if (language === "Go") return source.includes("fmt.scan");
  if (language === "Bash") return source.includes("\nread ") || source.startsWith("read ");

  return false;
}

type CodeTerminalProps = {
  initialLanguage?: Language;
};

export default function CodeTerminal({ initialLanguage = "JavaScript" }: CodeTerminalProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [code, setCode] = useState(getLanguageConfig(initialLanguage).template);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [savedCodeByLanguage, setSavedCodeByLanguage] = useState<Record<string, string>>({
    [initialLanguage]: getLanguageConfig(initialLanguage).template,
  });
  const [runtimeAvailability, setRuntimeAvailability] = useState<Partial<Record<Language, boolean>>>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const shouldShowInput = codeNeedsInput(language, code);
  const resolvedPreviewDoc = previewDoc ? buildPreviewDocument(language, previewDoc) : null;

  useEffect(() => {
    setLanguage(initialLanguage);
    setCode((prev) => savedCodeByLanguage[initialLanguage] ?? getLanguageConfig(initialLanguage).template ?? prev);
    setStdin("");
    setOutput([]);
    setPreviewDoc(null);
    setShowLangMenu(false);
  }, [initialLanguage]);

  const switchLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setCode(savedCodeByLanguage[nextLanguage] ?? getLanguageConfig(nextLanguage).template);
    setStdin("");
    setOutput([]);
    setPreviewDoc(null);
    setShowLangMenu(false);
  };

  const applyProgramResult = (result: ProgramResult) => {
    setOutput(result.lines);
    setPreviewDoc(result.preview ?? null);
  };

  const runCode = async () => {
    setIsRunning(true);
    setSavedCodeByLanguage((prev) => ({ ...prev, [language]: code }));
    try {
      if (LOCAL_RUNTIME_LANGUAGES.includes(language) && runtimeAvailability[language]) {
        const response = await fetch("http://127.0.0.1:4312/api/runtime/execute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language,
            code,
            stdin,
          }),
        });

        const payload = (await response.json()) as { lines?: string[]; error?: string };
        if (response.ok && payload.lines) {
          applyProgramResult({ lines: payload.lines });
          return;
        }
      }

      applyProgramResult(executeProgram(language, code, stdin));
    } catch {
      applyProgramResult(executeProgram(language, code, stdin));
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    let ignore = false;

    fetch("http://127.0.0.1:4312/api/runtime/status")
      .then(async (response) => {
        if (!response.ok) throw new Error("Runtime server unavailable");
        return (await response.json()) as { available?: Partial<Record<Language, boolean>> };
      })
      .then((payload) => {
        if (!ignore && payload.available) {
          setRuntimeAvailability(payload.available);
        }
      })
      .catch(() => {
        if (!ignore) {
          setRuntimeAvailability({});
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = textareaRef.current;
      if (!ta) return;

      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      setCode(code.substring(0, start) + "  " + code.substring(end));

      setTimeout(() => {
        ta.selectionStart = start + 2;
        ta.selectionEnd = start + 2;
      }, 0);
    }

    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      void runCode();
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-lg glow-primary">
      <div className="gradient-dark flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-accent/80" />
            <span className="h-3 w-3 rounded-full bg-primary/80" />
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)} 
              className={menuButtonClass}
              aria-haspopup="true"
              aria-expanded={showLangMenu}
            >
              <Terminal className="h-3.5 w-3.5" />
              {language}
              <ChevronDown className="h-3 w-3" />
            </button>
            {showLangMenu && (
              <div className="absolute left-0 top-full z-10 mt-1 max-h-64 overflow-auto rounded-md border border-white/15 bg-slate-900 shadow-xl">
                {LANGUAGE_ORDER.map((item) => (
                  <button
                    key={item}
                    onClick={() => switchLanguage(item)}
                    className={`block w-full border-b border-white/5 px-4 py-2 text-left text-sm font-mono transition last:border-b-0 ${
                      item === language
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-slate-900 text-slate-100 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:block">
            {runtimeAvailability[language] && LOCAL_RUNTIME_LANGUAGES.includes(language)
              ? "Local runtime active"
              : "Offline practice mode"}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className={baseIconButtonClass}
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative bg-terminal">
        <div className="absolute bottom-0 left-0 top-0 flex w-12 select-none flex-col items-center bg-terminal-header/50 pt-3 font-mono text-xs text-muted-foreground">
          {code.split("\n").map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          className="w-full min-h-[200px] resize-y bg-transparent py-3 pl-14 pr-4 font-mono text-sm leading-6 text-terminal-foreground caret-primary outline-none"
          style={{ tabSize: 2 }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-slate-950/80 px-4 py-3">
        <div className="text-xs text-slate-400">
          {runtimeAvailability[language] && LOCAL_RUNTIME_LANGUAGES.includes(language)
            ? `${language} will run on your local machine`
            : `${language} will run in offline practice mode`}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCode(getLanguageConfig(language).template)}
            className={secondaryButtonClass}
            title="Load default example"
          >
            <RotateCcw className="h-4 w-4" />
            Example
          </button>
          <button
            onClick={() => {
              setOutput([]);
              setPreviewDoc(null);
            }}
            className={secondaryButtonClass}
            title="Clear output"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
          <button
            onClick={() => void runCode()}
            disabled={isRunning}
            className={`${actionButtonClass} min-w-[132px] justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-emerald-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-300`}
          >
            <Play className="h-4 w-4" />
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>

      {shouldShowInput && (
        <div className="border-t border-border bg-terminal p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Program input</div>
            <div className="text-xs text-muted-foreground">
              {runtimeAvailability[language] && LOCAL_RUNTIME_LANGUAGES.includes(language)
                ? `Real local ${language} runtime active`
                : getInputHint(language)}
            </div>
          </div>
          <textarea
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            spellCheck={false}
            placeholder={getInputPlaceholder(language)}
            className="min-h-[88px] w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 font-mono text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/60"
          />
        </div>
      )}

      {output.length > 0 && (
        <div className="border-t border-border">
          <div className="flex items-center gap-2 bg-terminal-header px-4 py-2 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Output
          </div>
          <div ref={outputRef} className="max-h-[220px] overflow-auto bg-terminal p-4">
            {output.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap font-mono text-sm leading-6 text-terminal-foreground">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      {resolvedPreviewDoc && (language === "HTML" || language === "CSS") && (
        <div className="border-t border-border">
          <div className="bg-terminal-header px-4 py-2 font-mono text-xs text-muted-foreground">Preview</div>
          <div className="bg-slate-100 p-4 dark:bg-slate-900">
            <iframe
              srcDoc={resolvedPreviewDoc}
              className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700"
              sandbox="allow-scripts"
              title={`${language} Preview`}
            />
          </div>
        </div>
      )}

      <div className="bg-terminal-header px-4 py-2 text-right font-mono text-xs text-muted-foreground">
        Write code, add input if needed, then press Run Code
      </div>
    </div>
  );
}
