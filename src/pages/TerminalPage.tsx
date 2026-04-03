import { Code2, Sparkles, Terminal, Wand2 } from "lucide-react";
import CodeTerminal from "@/components/CodeTerminal";
import Navbar from "@/components/Navbar";

const FEATURES = [
  { icon: Terminal, title: "Interactive input", desc: "Pass stdin into your snippets and test logic more realistically." },
  { icon: Code2, title: "Multi-language practice", desc: "Switch between the course languages from one clean terminal." },
  { icon: Wand2, title: "Visual preview", desc: "HTML and CSS get instant preview panels for front-end experiments." },
];

export default function TerminalPage() {
  return (
    <div className="page-shell min-h-screen text-slate-900 dark:text-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="hero-panel rounded-[34px] p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="hero-badge">Interactive coding lab</div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Practice code in a workspace that feels finished
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Write code, pass input, inspect output, and move between languages without losing your rhythm.
              </p>
            </div>
            <div className="feature-tile max-w-sm">
              <Sparkles className="h-5 w-5 text-fuchsia-500" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Made for learning</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">A cleaner coding space helps reduce friction and keeps practice approachable.</p>
              </div>
            </div>
          </div>

          <CodeTerminal />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="feature-tile">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 dark:bg-white/10">
                  <Icon className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
