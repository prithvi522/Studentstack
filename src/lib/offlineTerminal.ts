export type Language =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Java"
  | "PHP"
  | "Ruby"
  | "Go"
  | "NodeJS"
  | "SQL"
  | "C"
  | "C++"
  | "C#"
  | "Bash";

export type TerminalLineKind = "muted" | "warn" | "good" | "bad";

export type TerminalEntry = {
  text: string;
  kind: TerminalLineKind;
};

export type RunnerKind = "browser-js" | "browser-html" | "browser-css" | "offline";

export type LanguageConfig = {
  template: string;
  runner: RunnerKind;
};

export type ProgramResult = {
  lines: string[];
  preview?: string;
};

type VirtualFile = {
  type: "file";
  content: string;
};

type VirtualDir = {
  type: "dir";
};

type VirtualNode = VirtualFile | VirtualDir;

export type VirtualFsState = {
  cwd: string;
  nodes: Record<string, VirtualNode>;
};

export type CommandContext = {
  raw: string;
  state: VirtualFsState;
  language: Language;
  activePath: string;
  code: string;
  stdin: string;
};

export type CommandResult = {
  state: VirtualFsState;
  lines: TerminalEntry[];
  activeLanguage?: Language;
  activePath?: string;
  activeCode?: string;
  program?: ProgramResult;
  clearScreen?: boolean;
};

export const LANGUAGE_CONFIG: Record<Language, LanguageConfig> = {
  HTML: {
    runner: "browser-html",
    template:
      "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello from HTML</h1>\n    <p>Preview updates below when you run.</p>\n  </body>\n</html>",
  },
  CSS: {
    runner: "browser-css",
    template:
      "body {\n  font-family: Arial, sans-serif;\n  background: #f4fff9;\n  color: #083344;\n}\n\nh1 {\n  color: #0f766e;\n}\n\n.card {\n  padding: 16px;\n  border-radius: 12px;\n  background: white;\n  box-shadow: 0 10px 25px rgba(15, 118, 110, 0.15);\n}",
  },
  JavaScript: {
    runner: "browser-js",
    template:
      '// Example: add two numbers from user input\nconst a = Number(input());\nconst b = Number(input());\n\nconsole.log("Sum =", a + b);',
  },
  TypeScript: {
    runner: "offline",
    template:
      'type User = {\n  name: string;\n  streak: number;\n};\n\nconst user: User = { name: "StudentStack", streak: 7 };\nconsole.log(`${user.name} streak: ${user.streak}`);',
  },
  Python: {
    runner: "offline",
    template:
      '# Add two numbers from user input\nnum1 = int(input("Enter the first number: "))\nnum2 = int(input("Enter the second number: "))\nsum_of_numbers = num1 + num2\nprint("The sum is:", sum_of_numbers)',
  },
  Java: {
    runner: "offline",
    template:
      'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int a = sc.nextInt();\n    System.out.print("Enter second number: ");\n    int b = sc.nextInt();\n    System.out.println("Sum = " + (a + b));\n  }\n}',
  },
  PHP: {
    runner: "offline",
    template:
      '<?php\n$a = intval(trim(fgets(STDIN)));\n$b = intval(trim(fgets(STDIN)));\necho "Sum = " . ($a + $b) . PHP_EOL;\n?>',
  },
  Ruby: {
    runner: "offline",
    template:
      'a = gets.to_i\nb = gets.to_i\nputs "Sum = #{a + b}"',
  },
  Go: {
    runner: "offline",
    template:
      'package main\n\nimport "fmt"\n\nfunc main() {\n  var a int\n  var b int\n  fmt.Scan(&a)\n  fmt.Scan(&b)\n  fmt.Println("Sum =", a+b)\n}',
  },
  NodeJS: {
    runner: "browser-js",
    template:
      '// Example: add two numbers from user input\nconst a = Number(input());\nconst b = Number(input());\n\nconsole.log("Sum =", a + b);',
  },
  SQL: {
    runner: "offline",
    template:
      "SELECT name, streak\nFROM students\nWHERE streak >= 7\nORDER BY streak DESC;",
  },
  C: {
    runner: "offline",
    template:
      '#include <stdio.h>\n\nint main() {\n  int a, b;\n  scanf("%d", &a);\n  scanf("%d", &b);\n  printf("Sum = %d\\n", a + b);\n  return 0;\n}',
  },
  "C++": {
    runner: "offline",
    template:
      "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a, b;\n  cin >> a >> b;\n  cout << \"Sum = \" << (a + b) << endl;\n  return 0;\n}",
  },
  "C#": {
    runner: "offline",
    template:
      'using System;\n\nclass Program {\n  static void Main() {\n    int a = int.Parse(Console.ReadLine() ?? "0");\n    int b = int.Parse(Console.ReadLine() ?? "0");\n    Console.WriteLine("Sum = " + (a + b));\n  }\n}',
  },
  Bash: {
    runner: "offline",
    template:
      '#!/bin/bash\nread a\nread b\necho "Sum = $((a + b))"',
  },
};

const languageFileNames: Record<Language, string> = {
  HTML: "main.html",
  CSS: "main.css",
  JavaScript: "main.js",
  TypeScript: "main.ts",
  Python: "main.py",
  Java: "Main.java",
  PHP: "main.php",
  Ruby: "main.rb",
  Go: "main.go",
  NodeJS: "main.node.js",
  SQL: "main.sql",
  C: "main.c",
  "C++": "main.cpp",
  "C#": "Program.cs",
  Bash: "main.sh",
};

const languageAliases: Record<string, Language> = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  javascript: "JavaScript",
  ts: "TypeScript",
  typescript: "TypeScript",
  py: "Python",
  python: "Python",
  java: "Java",
  php: "PHP",
  ruby: "Ruby",
  rb: "Ruby",
  go: "Go",
  node: "NodeJS",
  nodejs: "NodeJS",
  sql: "SQL",
  c: "C",
  cpp: "C++",
  "c++": "C++",
  cs: "C#",
  "c#": "C#",
  bash: "Bash",
  sh: "Bash",
};

const sampleRows = [
  { name: "Aarav", streak: 11, score: 94 },
  { name: "Diya", streak: 8, score: 89 },
  { name: "Kabir", streak: 6, score: 72 },
  { name: "Meera", streak: 4, score: 67 },
];

function toTerminalEntries(lines: string[], kind: TerminalLineKind = "muted"): TerminalEntry[] {
  return lines.map((text) => ({ text, kind }));
}

export function getLanguageFilePath(language: Language) {
  return `/home/student/${languageFileNames[language]}`;
}

export function getLanguageFromPath(path: string): Language | null {
  const name = baseName(path).toLowerCase();
  const byPath = (Object.entries(languageFileNames) as [Language, string][]).find(
    ([, file]) => file.toLowerCase() === name,
  );

  return byPath?.[0] ?? null;
}

export function createInitialFsState(): VirtualFsState {
  const nodes: Record<string, VirtualNode> = {
    "/": { type: "dir" },
    "/home": { type: "dir" },
    "/home/student": { type: "dir" },
    "/home/student/notes.txt": {
      type: "file",
      content: "Welcome to StudentStack offline terminal.\nType `help` and try `run`.\n",
    },
    "/home/student/about.md": {
      type: "file",
      content: "# Offline runtime\nThis terminal runs locally in the browser with safe simulators.\n",
    },
  };

  (Object.keys(LANGUAGE_CONFIG) as Language[]).forEach((language) => {
    nodes[getLanguageFilePath(language)] = {
      type: "file",
      content: LANGUAGE_CONFIG[language].template,
    };
  });

  return {
    cwd: "/home/student",
    nodes,
  };
}

export function createBootEntries(): TerminalEntry[] {
  return [
    { text: "Offline StudentStack terminal is ready.", kind: "good" },
    {
      text: "It runs locally in your browser with safe offline execution and command simulation.",
      kind: "muted",
    },
    {
      text: "Try `help`, `ls`, `lang python`, `open main.py`, or `run`.",
      kind: "muted",
    },
  ];
}

export function normalizePath(path: string) {
  const parts = path.split("/").filter(Boolean);
  const stack: string[] = [];

  for (const part of parts) {
    if (part === ".") continue;
    if (part === "..") {
      stack.pop();
      continue;
    }
    stack.push(part);
  }

  return "/" + stack.join("/");
}

function resolvePath(cwd: string, inputPath?: string) {
  if (!inputPath || inputPath === ".") return cwd;
  if (inputPath.startsWith("/")) return normalizePath(inputPath);
  return normalizePath(`${cwd}/${inputPath}`);
}

function parentDir(path: string) {
  const normalized = normalizePath(path);
  if (normalized === "/") return "/";
  const parts = normalized.split("/").filter(Boolean);
  parts.pop();
  return "/" + parts.join("/");
}

function baseName(path: string) {
  return normalizePath(path).split("/").filter(Boolean).at(-1) ?? "";
}

function splitArgs(input: string) {
  const source = input.trim();
  if (!source) return [];

  const out: string[] = [];
  let current = "";
  let quote: string | null = null;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if ((char === '"' || char === "'") && !quote) {
      quote = char;
      continue;
    }
    if (quote && char === quote) {
      quote = null;
      continue;
    }
    if (!quote && /\s/.test(char)) {
      if (current) out.push(current);
      current = "";
      continue;
    }
    current += char;
  }

  if (current) out.push(current);
  return out;
}

function getNode(state: VirtualFsState, path: string) {
  return state.nodes[normalizePath(path)] ?? null;
}

function listDir(state: VirtualFsState, path: string) {
  const target = normalizePath(path);
  const node = getNode(state, target);
  if (!node) return { ok: false, names: [] as string[], message: "No such file or directory." };
  if (node.type !== "dir") return { ok: false, names: [] as string[], message: "Not a directory." };

  const names = Object.keys(state.nodes)
    .filter((entry) => entry !== target && parentDir(entry) === target)
    .map((entry) => baseName(entry))
    .sort((a, b) => a.localeCompare(b));

  return { ok: true, names, message: "" };
}

function ensureDir(state: VirtualFsState, path: string) {
  const nextState = {
    ...state,
    nodes: { ...state.nodes },
  };
  const normalized = normalizePath(path);
  const parts = normalized.split("/").filter(Boolean);
  let current = "";
  if (!nextState.nodes["/"]) {
    nextState.nodes["/"] = { type: "dir" };
  }

  for (const part of parts) {
    current = `${current}/${part}`;
    if (!nextState.nodes[current]) {
      nextState.nodes[current] = { type: "dir" };
    }
  }

  return nextState;
}

export function upsertVirtualFile(state: VirtualFsState, path: string, content: string): VirtualFsState {
  const nextState = ensureDir(state, parentDir(path));
  return {
    ...nextState,
    nodes: {
      ...nextState.nodes,
      [normalizePath(path)]: { type: "file", content },
    },
  };
}

function deleteNode(state: VirtualFsState, path: string) {
  const normalized = normalizePath(path);
  const prefix = normalized === "/" ? "/" : `${normalized}/`;
  const nextNodes = { ...state.nodes };
  Object.keys(nextNodes).forEach((entry) => {
    if (entry === normalized || entry.startsWith(prefix)) {
      delete nextNodes[entry];
    }
  });
  return { ...state, nodes: nextNodes };
}

function formatValue(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value, null, 2);
}

function splitTopLevel(source: string, separator: string) {
  const out: string[] = [];
  let current = "";
  let depth = 0;
  let inSingle = false;
  let inDouble = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const prev = source[index - 1] ?? "";

    if (!inDouble && char === "'" && prev !== "\\") inSingle = !inSingle;
    else if (!inSingle && char === '"' && prev !== "\\") inDouble = !inDouble;

    if (!inSingle && !inDouble) {
      if (char === "(") depth += 1;
      if (char === ")") depth = Math.max(0, depth - 1);
      if (depth === 0 && source.startsWith(separator, index)) {
        out.push(current);
        current = "";
        index += separator.length - 1;
        continue;
      }
    }

    current += char;
  }

  if (current.trim()) out.push(current);
  return out;
}

function tryParseQuotedString(source: string) {
  const trimmed = source.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed
      .slice(1, -1)
      .replaceAll("\\n", "\n")
      .replaceAll("\\r", "\r")
      .replaceAll("\\t", "\t")
      .replaceAll('\\"', '"')
      .replaceAll("\\'", "'")
      .replaceAll("\\\\", "\\");
  }

  return null;
}

function tokenizeArithmetic(expr: string) {
  const tokens: Array<{ type: "num" | "ident" | "op"; value: string | number }> = [];
  const source = expr.trim();
  let index = 0;

  while (index < source.length) {
    const char = source[index];
    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    if (/[0-9]/.test(char)) {
      let cursor = index + 1;
      while (cursor < source.length && /[0-9.]/.test(source[cursor])) cursor += 1;
      tokens.push({ type: "num", value: Number(source.slice(index, cursor)) });
      index = cursor;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      let cursor = index + 1;
      while (cursor < source.length && /[A-Za-z0-9_$]/.test(source[cursor])) cursor += 1;
      tokens.push({ type: "ident", value: source.slice(index, cursor) });
      index = cursor;
      continue;
    }

    if ("+-*/()".includes(char)) {
      tokens.push({ type: "op", value: char });
      index += 1;
      continue;
    }

    throw new Error(`Unsupported expression token '${char}'.`);
  }

  return tokens;
}

function evalArithmetic(expr: string, vars: Record<string, string | number>) {
  const tokens = tokenizeArithmetic(expr);
  const output: Array<{ type: "num" | "ident" | "op"; value: string | number }> = [];
  const stack: Array<{ type: "op"; value: string | number }> = [];
  const precedence: Record<string, number> = { "u-": 3, "*": 2, "/": 2, "+": 1, "-": 1 };
  const isRightAssociative = (op: string) => op === "u-";
  let prev: { type: "num" | "ident" | "op"; value: string | number } | null = null;

  for (const token of tokens) {
    if (token.type === "num" || token.type === "ident") {
      output.push(token);
      prev = token;
      continue;
    }

    let op = String(token.value);
    if (op === "-") {
      if (!prev || (prev.type === "op" && prev.value !== ")")) {
        op = "u-";
      }
    }

    if (op === "(") {
      stack.push({ type: "op", value: op });
      prev = { type: "op", value: op };
      continue;
    }

    if (op === ")") {
      while (stack.length && stack.at(-1)?.value !== "(") {
        output.push(stack.pop() as { type: "op"; value: string | number });
      }
      stack.pop();
      prev = { type: "op", value: op };
      continue;
    }

    while (stack.length) {
      const top = String(stack.at(-1)?.value ?? "");
      if (top === "(") break;
      const topPrecedence = precedence[top];
      const nextPrecedence = precedence[op];
      if (topPrecedence > nextPrecedence || (topPrecedence === nextPrecedence && !isRightAssociative(op))) {
        output.push(stack.pop() as { type: "op"; value: string | number });
      } else {
        break;
      }
    }
    stack.push({ type: "op", value: op });
    prev = { type: "op", value: op };
  }

  while (stack.length) {
    output.push(stack.pop() as { type: "op"; value: string | number });
  }

  const values: number[] = [];
  for (const token of output) {
    if (token.type === "num") {
      values.push(Number(token.value));
      continue;
    }
    if (token.type === "ident") {
      const value = vars[String(token.value)];
      if (typeof value !== "number") {
        throw new Error(`Unknown numeric value '${String(token.value)}'.`);
      }
      values.push(value);
      continue;
    }

    const op = String(token.value);
    if (op === "u-") {
      const value = values.pop() ?? 0;
      values.push(-value);
      continue;
    }

    const b = values.pop() ?? 0;
    const a = values.pop() ?? 0;
    if (op === "+") values.push(a + b);
    if (op === "-") values.push(a - b);
    if (op === "*") values.push(a * b);
    if (op === "/") values.push(a / b);
  }

  return values[0] ?? 0;
}

function createInputReader(stdin: string) {
  const lines = stdin.split(/\r?\n/);
  let index = 0;
  return () => lines[index++] ?? "";
}

function parseMaybeValue(source: string, vars: Record<string, string | number>) {
  const normalized = source.trim().replace(/^\((.*)\)$/, "$1");
  const stringValue = tryParseQuotedString(normalized);
  if (stringValue !== null) return stringValue;
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(normalized) && vars[normalized] !== undefined) {
    return vars[normalized];
  }
  return evalArithmetic(normalized, vars);
}

function evalCondition(source: string, vars: Record<string, string | number>) {
  const normalized = source.trim().replace(/^\((.*)\)$/, "$1");
  const comparisonMatch = normalized.match(/^(.*?)\s*(==|!=|>=|<=|>|<)\s*(.*?)$/);

  if (!comparisonMatch) {
    const value = parseMaybeValue(normalized, vars);
    return Boolean(value);
  }

  const [, leftExpr, operator, rightExpr] = comparisonMatch;
  const left = parseMaybeValue(leftExpr, vars);
  const right = parseMaybeValue(rightExpr, vars);

  if (operator === "==") return left === right;
  if (operator === "!=") return left !== right;
  if (operator === ">=") return Number(left) >= Number(right);
  if (operator === "<=") return Number(left) <= Number(right);
  if (operator === ">") return Number(left) > Number(right);
  return Number(left) < Number(right);
}

function simulatePython(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  const lines = code.split("\n").map((raw) => ({
    indent: raw.match(/^\s*/)?.[0].length ?? 0,
    text: raw.replace(/#.*$/g, "").trim(),
  }));

  const executeLine = (line: string) => {
    if (!line) return;

    const inputAssign = line.match(
      /^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:(int|float)\()?\s*input\((.*?)\)\s*\)?$/,
    );
    if (inputAssign) {
      const [, name, cast, promptExpr] = inputAssign;
      const prompt = promptExpr?.trim() ? tryParseQuotedString(promptExpr.trim()) : null;
      if (prompt) outputs.push(prompt);
      const value = readInput();
      vars[name] = cast === "float" ? Number(value) : cast === "int" ? parseInt(value || "0", 10) : value;
      return;
    }

    const assignMatch = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const [, name, rhs] = assignMatch;
      vars[name] = parseMaybeValue(rhs.trim(), vars);
      return;
    }

    const printMatch = line.match(/^print\s*\((.*)\)\s*$/);
    if (printMatch) {
      const parts = splitTopLevel(printMatch[1], ",").map((part) => part.trim());
      outputs.push(parts.map((part) => formatValue(parseMaybeValue(part, vars))).join(" "));
    }
  };

  const findNextNonEmptyIndex = (start: number) => {
    let cursor = start;
    while (cursor < lines.length && !lines[cursor].text) {
      cursor += 1;
    }
    return cursor;
  };

  const findBlockEnd = (start: number, blockIndent: number) => {
    let cursor = start;
    while (cursor < lines.length) {
      if (!lines[cursor].text) {
        cursor += 1;
        continue;
      }
      if (lines[cursor].indent < blockIndent) {
        break;
      }
      cursor += 1;
    }
    return cursor;
  };

  const executeBlock = (start: number, parentIndent: number) => {
    let index = start;

    while (index < lines.length) {
      const current = lines[index];

      if (!current.text) {
        index += 1;
        continue;
      }

      if (current.indent < parentIndent) {
        break;
      }

      if (current.indent > parentIndent) {
        index += 1;
        continue;
      }

      const ifMatch = current.text.match(/^if\s+(.+)\s*:\s*$/);
      if (ifMatch) {
        const branchStart = findNextNonEmptyIndex(index + 1);
        const branchIndent = lines[branchStart]?.indent ?? current.indent + 4;
        const branchEnd = findBlockEnd(branchStart, branchIndent);

        const elseStart = findNextNonEmptyIndex(branchEnd);
        let finalIndex = branchEnd;
        let elseBlockStart = elseStart;
        let hasElse = false;

        if (elseStart < lines.length && lines[elseStart].indent === parentIndent && lines[elseStart].text === "else:") {
          hasElse = true;
          elseBlockStart = findNextNonEmptyIndex(elseStart + 1);
          const elseIndent = lines[elseBlockStart]?.indent ?? parentIndent + 4;
          finalIndex = findBlockEnd(elseBlockStart, elseIndent);
        }

        if (evalCondition(ifMatch[1], vars)) {
          executeBlock(branchStart, branchIndent);
        } else if (hasElse) {
          const elseIndent = lines[elseBlockStart]?.indent ?? parentIndent + 4;
          executeBlock(elseBlockStart, elseIndent);
        }

        index = finalIndex;
        continue;
      }

      if (current.text === "else:") {
        break;
      }

      executeLine(current.text);
      index += 1;
    }

    return index;
  };

  executeBlock(0, 0);

  return outputs.length ? outputs : ["(no output)"];
}

function simulateCOrCpp(code: string, stdin: string, isCpp = false) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.replace(/\/\/.*$/g, "").replace(/\/\*.*?\*\//g, "").trim();
    if (!rawLine) continue;

    const declMatch = rawLine.match(
      /^(?:unsigned\s+|long\s+|long\s+long\s+)?(?:int|double|float)\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?);$/,
    );
    if (declMatch) {
      vars[declMatch[1]] = evalArithmetic(declMatch[2], vars);
      continue;
    }

    const emptyDeclMatch = rawLine.match(
      /^(?:int|double|float)\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s*,\s*([A-Za-z_][A-Za-z0-9_]*))*\s*;$/,
    );
    if (emptyDeclMatch) {
      rawLine
        .replace(/^(?:int|double|float)\s+/, "")
        .replace(/;$/, "")
        .split(",")
        .map((piece) => piece.trim())
        .forEach((name) => {
          vars[name] = 0;
        });
      continue;
    }

    const scanMatch = rawLine.match(/scanf\s*\((.*)\)\s*;\s*$/);
    if (scanMatch) {
      const args = splitTopLevel(scanMatch[1], ",").map((part) => part.trim());
      args.slice(1).forEach((part) => {
        const name = part.replace("&", "").trim();
        vars[name] = Number(readInput() || "0");
      });
      continue;
    }

    const cinMatch = rawLine.match(/(?:std::)?cin\s*>>\s*(.*)\s*;\s*$/);
    if (cinMatch) {
      cinMatch[1]
        .split(">>")
        .map((part) => part.trim())
        .forEach((name) => {
          vars[name] = Number(readInput() || "0");
        });
      continue;
    }

    const printfMatch = rawLine.match(/printf\s*\((.*)\)\s*;\s*$/);
    if (printfMatch) {
      const parts = splitTopLevel(printfMatch[1], ",").map((part) => part.trim());
      const format = tryParseQuotedString(parts[0]) ?? parts[0];
      let rendered = format;
      let argIndex = 1;
      while (/%[dfs]/.test(rendered) && argIndex < parts.length) {
        const nextValue = formatValue(parseMaybeValue(parts[argIndex], vars));
        rendered = rendered.replace(/%[dfs]/, nextValue);
        argIndex += 1;
      }
      outputs.push(rendered);
      continue;
    }

    const coutMatch = rawLine.match(/(?:(?:std::)?cout)\s*<<\s*(.*)\s*;\s*$/);
    if (coutMatch) {
      const rendered = splitTopLevel(coutMatch[1], "<<")
        .map((part) => part.trim())
        .filter((part) => part && part !== "endl" && part !== "std::endl")
        .map((part) => formatValue(parseMaybeValue(part, vars)))
        .join("");
      outputs.push(rendered);
      continue;
    }

    const assignMatch = rawLine.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?);$/);
    if (assignMatch) {
      vars[assignMatch[1]] = evalArithmetic(assignMatch[2], vars);
    }
  }

  if (!outputs.length && isCpp) return ["C++ code executed in offline practice mode."];
  return outputs.length ? outputs : ["(no output)"];
}

function simulateJava(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.replace(/\/\/.*$/g, "").trim();
    if (!rawLine) continue;

    const printPrompt = rawLine.match(/System\.out\.print\s*\((.*)\)\s*;\s*$/);
    if (printPrompt) {
      outputs.push(formatValue(parseMaybeValue(printPrompt[1].trim(), vars)));
      continue;
    }

    const scannerMatch = rawLine.match(/int\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\w+\.nextInt\(\)\s*;\s*$/);
    if (scannerMatch) {
      vars[scannerMatch[1]] = Number(readInput() || "0");
      continue;
    }

    const declMatch = rawLine.match(/^int\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?);$/);
    if (declMatch) {
      vars[declMatch[1]] = evalArithmetic(declMatch[2], vars);
      continue;
    }

    const printlnMatch = rawLine.match(/System\.out\.println\s*\((.*)\)\s*;\s*$/);
    if (printlnMatch) {
      const inside = printlnMatch[1].trim();
      if (inside.includes("+")) {
        const parts = splitTopLevel(inside, "+").map((part) => part.trim()).filter(Boolean);
        outputs.push(parts.map((part) => formatValue(parseMaybeValue(part, vars))).join(""));
      } else {
        outputs.push(formatValue(parseMaybeValue(inside, vars)));
      }
      continue;
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulatePhp(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.trim();
    if (!rawLine || rawLine.startsWith("<?") || rawLine.startsWith("?>")) continue;

    const inputMatch = rawLine.match(/^\$([A-Za-z_][A-Za-z0-9_]*)\s*=\s*intval\(trim\(fgets\(STDIN\)\)\)\s*;\s*$/);
    if (inputMatch) {
      vars[`$${inputMatch[1]}`] = parseInt(readInput() || "0", 10);
      continue;
    }

    const assignMatch = rawLine.match(/^\$([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?)\s*;\s*$/);
    if (assignMatch) {
      const key = `$${assignMatch[1]}`;
      const rhs = assignMatch[2].trim();
      if (rhs.startsWith("intval")) continue;
      vars[key] = parseMaybeValue(rhs.replaceAll("$", "$"), vars);
      continue;
    }

    const echoMatch = rawLine.match(/^echo\s+(.+?)\s*;\s*$/);
    if (echoMatch) {
      const parts = splitTopLevel(echoMatch[1], ".")
        .map((part) => part.trim())
        .filter((part) => part !== "PHP_EOL");
      outputs.push(parts.map((part) => formatValue(parseMaybeValue(part, vars))).join(""));
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulateRuby(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.replace(/#.*$/g, "").trim();
    if (!rawLine) continue;

    const inputMatch = rawLine.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*gets(?:\.chomp)?(?:\.to_i)?$/);
    if (inputMatch) {
      const value = readInput();
      vars[inputMatch[1]] = rawLine.endsWith(".to_i") ? parseInt(value || "0", 10) : value;
      continue;
    }

    const assignMatch = rawLine.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
    if (assignMatch) {
      vars[assignMatch[1]] = parseMaybeValue(assignMatch[2], vars);
      continue;
    }

    const putsMatch = rawLine.match(/^puts\s+(.+)$/);
    if (putsMatch) {
      const value = putsMatch[1].trim();
      const stringValue = tryParseQuotedString(value);
      if (stringValue !== null) {
        outputs.push(
          stringValue.replace(/#\{([^}]+)\}/g, (_, key: string) => formatValue(vars[key.trim()] ?? "")),
        );
      } else {
        outputs.push(formatValue(parseMaybeValue(value, vars)));
      }
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulateGo(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.replace(/\/\/.*$/g, "").trim();
    if (!rawLine) continue;

    const scanMatch = rawLine.match(/fmt\.Scan(?:ln)?\((.*)\)\s*$/);
    if (scanMatch) {
      splitTopLevel(scanMatch[1], ",")
        .map((part) => part.trim().replace("&", ""))
        .forEach((name) => {
          vars[name] = Number(readInput() || "0");
        });
      continue;
    }

    const varMatch = rawLine.match(/^var\s+([A-Za-z_][A-Za-z0-9_]*)\s+\w+(?:\s*=\s*(.+))?$/);
    if (varMatch) {
      vars[varMatch[1]] = varMatch[2] ? parseMaybeValue(varMatch[2], vars) : 0;
      continue;
    }

    const shortDeclMatch = rawLine.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:=\s*(.+)$/);
    if (shortDeclMatch) {
      vars[shortDeclMatch[1]] = parseMaybeValue(shortDeclMatch[2], vars);
      continue;
    }

    const printlnMatch = rawLine.match(/fmt\.Println\s*\((.*)\)\s*$/);
    if (printlnMatch) {
      outputs.push(
        splitTopLevel(printlnMatch[1], ",")
          .map((part) => formatValue(parseMaybeValue(part.trim(), vars)))
          .join(" "),
      );
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulateCSharp(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.replace(/\/\/.*$/g, "").trim();
    if (!rawLine) continue;

    const readLineMatch = rawLine.match(
      /^int\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*int\.Parse\(Console\.ReadLine\(\)\s*\?\?\s*"0"\)\s*;\s*$/,
    );
    if (readLineMatch) {
      vars[readLineMatch[1]] = parseInt(readInput() || "0", 10);
      continue;
    }

    const declMatch = rawLine.match(/^(?:int|double|string)\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?);$/);
    if (declMatch) {
      vars[declMatch[1]] = parseMaybeValue(declMatch[2], vars);
      continue;
    }

    const printMatch = rawLine.match(/^Console\.WriteLine\((.*)\)\s*;\s*$/);
    if (printMatch) {
      const inside = printMatch[1].trim();
      if (inside.includes("+")) {
        outputs.push(splitTopLevel(inside, "+").map((part) => formatValue(parseMaybeValue(part.trim(), vars))).join(""));
      } else {
        outputs.push(formatValue(parseMaybeValue(inside, vars)));
      }
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulateBash(code: string, stdin: string) {
  const vars: Record<string, string | number> = {};
  const outputs: string[] = [];
  const readInput = createInputReader(stdin);

  for (let rawLine of code.split("\n")) {
    rawLine = rawLine.trim();
    if (!rawLine || rawLine.startsWith("#")) continue;

    const readMatch = rawLine.match(/^read\s+([A-Za-z_][A-Za-z0-9_]*)$/);
    if (readMatch) {
      vars[readMatch[1]] = readInput();
      continue;
    }

    const assignMatch = rawLine.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.+)$/);
    if (assignMatch) {
      vars[assignMatch[1]] = assignMatch[2].trim().replace(/^["']|["']$/g, "");
      continue;
    }

    const echoMatch = rawLine.match(/^echo\s+(.+)$/);
    if (echoMatch) {
      const rendered = echoMatch[1]
        .replace(/\$\(\(([^)]+)\)\)/g, (_, expr: string) => String(evalArithmetic(expr, vars)))
        .replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g, (_, key: string) => String(vars[key] ?? ""));
      outputs.push(tryParseQuotedString(rendered) ?? rendered.replace(/^["']|["']$/g, ""));
    }
  }

  return outputs.length ? outputs : ["(no output)"];
}

function simulateSql(code: string) {
  const query = code.replace(/\s+/g, " ").trim();
  const selectMatch = query.match(
    /^SELECT\s+(.+?)\s+FROM\s+students(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s+(ASC|DESC))?)?\s*;?$/i,
  );

  if (!selectMatch) {
    return [
      "SQL practice mode supports SELECT queries on a sample `students` table.",
      "Available columns: name, streak, score.",
    ];
  }

  const [, columnsRaw, whereRaw, orderByRaw, directionRaw] = selectMatch;
  let rows = [...sampleRows];

  if (whereRaw) {
    const whereMatch = whereRaw.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(=|>=|<=|>|<)\s*(.+)$/);
    if (whereMatch) {
      const [, field, operator, rawValue] = whereMatch;
      const value = rawValue.replace(/^["']|["']$/g, "");
      rows = rows.filter((row) => {
        const current = row[field as keyof (typeof sampleRows)[number]];
        const compareLeft = typeof current === "number" ? current : String(current);
        const compareRight = typeof current === "number" ? Number(value) : value;
        if (operator === "=") return compareLeft === compareRight;
        if (operator === ">=") return Number(compareLeft) >= Number(compareRight);
        if (operator === "<=") return Number(compareLeft) <= Number(compareRight);
        if (operator === ">") return Number(compareLeft) > Number(compareRight);
        return Number(compareLeft) < Number(compareRight);
      });
    }
  }

  if (orderByRaw) {
    rows.sort((a, b) => {
      const left = a[orderByRaw as keyof typeof a];
      const right = b[orderByRaw as keyof typeof b];
      if (left === right) return 0;
      const result = left > right ? 1 : -1;
      return directionRaw?.toUpperCase() === "DESC" ? -result : result;
    });
  }

  const columns =
    columnsRaw.trim() === "*"
      ? ["name", "streak", "score"]
      : columnsRaw.split(",").map((column) => column.trim());

  const header = columns.join(" | ");
  const divider = columns.map(() => "--------").join("|");
  const body = rows.map((row) => columns.map((column) => String(row[column as keyof typeof row] ?? "")).join(" | "));

  return [header, divider, ...(body.length ? body : ["(0 rows)"])];
}

function transpileTypeScriptLite(code: string) {
  return code
    .replace(/type\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*\{[\s\S]*?\};?/g, "")
    .replace(/interface\s+[A-Za-z_][A-Za-z0-9_]*\s*\{[\s\S]*?\}\s*/g, "")
    .replace(/:\s*[A-Za-z_][A-Za-z0-9_<>\[\]\s|]*/g, "")
    .replace(/ as [A-Za-z_][A-Za-z0-9_<>\[\]\s|]*/g, "");
}

function runBrowserJavaScript(code: string, stdin: string) {
  const logs: string[] = [];
  const input = createInputReader(stdin);
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = (...args) => logs.push(args.map((arg) => formatValue(arg)).join(" "));
  console.warn = (...args) => logs.push(`Warning: ${args.map((arg) => formatValue(arg)).join(" ")}`);
  console.error = (...args) => logs.push(`Error: ${args.map((arg) => formatValue(arg)).join(" ")}`);

  try {
    const result = new Function("input", code)(input);
    if (result !== undefined) {
      logs.push(`Return: ${formatValue(result)}`);
    }
  } catch (error) {
    const message = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
    logs.push(`Error: ${message}`);
  } finally {
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
  }

  return logs.length ? logs : ["Code executed successfully with no console output."];
}

export function executeProgram(language: Language, code: string, stdin: string): ProgramResult {
  const config = LANGUAGE_CONFIG[language];

  if (config.runner === "browser-js") {
    return { lines: runBrowserJavaScript(code, stdin) };
  }

  if (config.runner === "browser-html") {
    return {
      lines: ["HTML preview rendered below."],
      preview: code,
    };
  }

  if (config.runner === "browser-css") {
    return {
      lines: ["CSS preview rendered below on the sample card."],
      preview: `<!DOCTYPE html><html><head><style>${code}</style></head><body><div class="card"><h1>StudentStack CSS</h1><p>Edit the stylesheet and press Run to refresh this preview.</p></div></body></html>`,
    };
  }

  if (language === "TypeScript") return { lines: runBrowserJavaScript(transpileTypeScriptLite(code), stdin) };
  if (language === "Python") return { lines: simulatePython(code, stdin) };
  if (language === "Java") return { lines: simulateJava(code, stdin) };
  if (language === "PHP") return { lines: simulatePhp(code, stdin) };
  if (language === "Ruby") return { lines: simulateRuby(code, stdin) };
  if (language === "Go") return { lines: simulateGo(code, stdin) };
  if (language === "NodeJS") return { lines: runBrowserJavaScript(code, stdin) };
  if (language === "SQL") return { lines: simulateSql(code) };
  if (language === "C") return { lines: simulateCOrCpp(code, stdin, false) };
  if (language === "C++") return { lines: simulateCOrCpp(code, stdin, true) };
  if (language === "C#") return { lines: simulateCSharp(code, stdin) };
  if (language === "Bash") return { lines: simulateBash(code, stdin) };

  return { lines: ["Offline practice mode is active."] };
}

function helpLines() {
  return [
    "Offline StudentStack terminal commands:",
    "",
    "Basics:",
    "  help  clear  pwd  ls  cd <dir>",
    "  cat <file>  touch <file>  mkdir <dir>  rm <name>",
    "  echo <text> > <file>  echo <text> >> <file>",
    "",
    "Editor:",
    "  open <file>  save  run",
    "  lang <html|css|js|ts|py|java|php|ruby|go|node|sql|c|cpp|cs|bash>",
    "",
    "Simulated Git:",
    "  git status  git add .  git commit -m \"msg\"  git log",
  ];
}

function runSimulatedGit(args: string[]) {
  const sub = args[0] ?? "";
  if (!sub || sub === "help") {
    return toTerminalEntries(
      ['Simulated Git: try `git status`, `git add .`, `git commit -m "msg"`, `git log`.'],
      "muted",
    );
  }
  if (sub === "status") {
    return toTerminalEntries(
      ["On branch main", "Your branch is up to date with 'origin/main'.", "", "nothing to commit, working tree clean"],
      "muted",
    );
  }
  if (sub === "add") return toTerminalEntries(["Added changes to staging area (simulated)."], "good");
  if (sub === "commit") {
    const messageIndex = args.findIndex((arg) => arg === "-m");
    const message = messageIndex >= 0 ? args[messageIndex + 1] : "";
    return message
      ? toTerminalEntries([`Committed (simulated): ${message}`], "good")
      : toTerminalEntries(['Usage: `git commit -m "message"`'], "warn");
  }
  if (sub === "log") {
    return toTerminalEntries(
      ["commit 4f3a9d1 (HEAD -> main)", "Author: student <student@offline>", "Date:   local offline session", "", "    first commit (simulated)"],
      "muted",
    );
  }
  return toTerminalEntries([`git: unknown subcommand '${sub}' (simulated)`], "warn");
}

export function runTerminalCommand(context: CommandContext): CommandResult {
  const args = splitArgs(context.raw);
  const command = (args[0] ?? "").toLowerCase();
  const rest = args.slice(1);
  let nextState = upsertVirtualFile(context.state, context.activePath, context.code);

  if (!command) {
    return { state: nextState, lines: [] };
  }

  if (command === "help") {
    return { state: nextState, lines: toTerminalEntries(helpLines(), "muted") };
  }

  if (command === "clear") {
    return { state: nextState, lines: [], clearScreen: true };
  }

  if (command === "pwd") {
    return { state: nextState, lines: toTerminalEntries([nextState.cwd], "muted") };
  }

  if (command === "ls") {
    const result = listDir(nextState, resolvePath(nextState.cwd, rest[0] ?? "."));
    return {
      state: nextState,
      lines: toTerminalEntries([result.ok ? result.names.join("  ") || "(empty)" : result.message], result.ok ? "muted" : "warn"),
    };
  }

  if (command === "cd") {
    const target = resolvePath(nextState.cwd, rest[0] ?? "/home/student");
    const node = getNode(nextState, target);
    if (!node) return { state: nextState, lines: toTerminalEntries(["No such directory."], "warn") };
    if (node.type !== "dir") return { state: nextState, lines: toTerminalEntries(["Not a directory."], "warn") };
    nextState = { ...nextState, cwd: target };
    return { state: nextState, lines: toTerminalEntries([`Now in ${target}`], "muted") };
  }

  if (command === "cat") {
    const filePath = resolvePath(nextState.cwd, rest[0]);
    const node = getNode(nextState, filePath);
    if (!node) return { state: nextState, lines: toTerminalEntries(["No such file."], "warn") };
    if (node.type !== "file") return { state: nextState, lines: toTerminalEntries(["Not a file."], "warn") };
    return { state: nextState, lines: toTerminalEntries([node.content], "muted") };
  }

  if (command === "touch") {
    if (!rest[0]) return { state: nextState, lines: toTerminalEntries(["Usage: `touch <file>`"], "warn") };
    const target = resolvePath(nextState.cwd, rest[0]);
    nextState = upsertVirtualFile(nextState, target, "");
    return { state: nextState, lines: toTerminalEntries([`Created ${baseName(target)}`], "good") };
  }

  if (command === "mkdir") {
    if (!rest[0]) return { state: nextState, lines: toTerminalEntries(["Usage: `mkdir <dir>`"], "warn") };
    const target = resolvePath(nextState.cwd, rest[0]);
    nextState = ensureDir(nextState, target);
    return { state: nextState, lines: toTerminalEntries([`Created ${target}`], "good") };
  }

  if (command === "rm") {
    if (!rest[0]) return { state: nextState, lines: toTerminalEntries(["Usage: `rm <name>`"], "warn") };
    const target = resolvePath(nextState.cwd, rest[0]);
    if (!getNode(nextState, target)) {
      return { state: nextState, lines: toTerminalEntries(["No such file or directory."], "warn") };
    }
    nextState = deleteNode(nextState, target);
    return { state: nextState, lines: toTerminalEntries([`Removed ${baseName(target)}`], "good") };
  }

  if (command === "echo") {
    const redirectIndex = rest.findIndex((item) => item === ">" || item === ">>");
    if (redirectIndex < 0) {
      return { state: nextState, lines: toTerminalEntries(["Usage: `echo <text> > <file>`"], "warn") };
    }
    const operator = rest[redirectIndex];
    const text = rest.slice(0, redirectIndex).join(" ");
    const file = rest[redirectIndex + 1];
    if (!file) return { state: nextState, lines: toTerminalEntries(["Missing file target."], "warn") };
    const target = resolvePath(nextState.cwd, file);
    const existing = getNode(nextState, target);
    const previous = existing && existing.type === "file" ? existing.content : "";
    const content = operator === ">>" ? `${previous}${text}\n` : `${text}\n`;
    nextState = upsertVirtualFile(nextState, target, content);
    return { state: nextState, lines: toTerminalEntries([`Wrote to ${baseName(target)}`], "good") };
  }

  if (command === "open") {
    if (!rest[0]) return { state: nextState, lines: toTerminalEntries(["Usage: `open <file>`"], "warn") };
    const target = resolvePath(nextState.cwd, rest[0]);
    const node = getNode(nextState, target);
    if (!node || node.type !== "file") {
      return { state: nextState, lines: toTerminalEntries(["Cannot open: file not found."], "warn") };
    }
    const nextLanguage = getLanguageFromPath(target) ?? context.language;
    return {
      state: nextState,
      lines: toTerminalEntries([`Opened ${target}`], "good"),
      activePath: target,
      activeCode: node.content,
      activeLanguage: nextLanguage,
    };
  }

  if (command === "save") {
    return {
      state: nextState,
      lines: toTerminalEntries([`Saved ${baseName(context.activePath)}.`], "good"),
    };
  }

  if (command === "run") {
    const program = executeProgram(context.language, context.code, context.stdin);
    nextState = upsertVirtualFile(nextState, context.activePath, context.code);
    return {
      state: nextState,
      lines: toTerminalEntries([`Ran ${baseName(context.activePath)}.`], "good"),
      program,
    };
  }

  if (command === "lang") {
    const nextLanguage = languageAliases[(rest[0] ?? "").toLowerCase()];
    if (!nextLanguage) {
      return {
        state: nextState,
        lines: toTerminalEntries(
          ["Usage: `lang <html|css|js|ts|py|java|php|ruby|go|node|sql|c|cpp|cs|bash>`"],
          "warn",
        ),
      };
    }
    const target = getLanguageFilePath(nextLanguage);
    const node = getNode(nextState, target);
    const content = node && node.type === "file" ? node.content : LANGUAGE_CONFIG[nextLanguage].template;
    return {
      state: nextState,
      lines: toTerminalEntries([`Switched to ${nextLanguage}.`], "good"),
      activeLanguage: nextLanguage,
      activePath: target,
      activeCode: content,
    };
  }

  if (command === "git") {
    return { state: nextState, lines: runSimulatedGit(rest) };
  }

  return {
    state: nextState,
    lines: toTerminalEntries([`Command not found: ${command}. Type \`help\`.`], "warn"),
  };
}
