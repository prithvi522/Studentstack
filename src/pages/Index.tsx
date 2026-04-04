import { useState } from "react";
import { ArrowRight, BookOpen, Code2, Database, Layers3, Server } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { categories } from "@/data";

const CATEGORY_META = {
  frontend: {
    icon: Layers3,
    title: "Frontend",
    description: "Interfaces, styling, and interactive browser experiences.",
  },
  backend: {
    icon: Server,
    title: "Backend",
    description: "APIs, servers, and logic that power modern applications.",
  },
  programming: {
    icon: Code2,
    title: "Programming",
    description: "Core languages and problem-solving foundations.",
  },
  database: {
    icon: Database,
    title: "Database",
    description: "Queries, persistence, and data design essentials.",
  },
} as const;

export default function Index() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const showCategory = (category: string) => {
    setCurrentCategory(category);
  };

  const goBack = () => {
    setCurrentCategory(null);
  };

  const showCourse = (course: string) => {
    window.open(`/#/course?course=${encodeURIComponent(course)}`, "_blank");
  };

  return (
    <div className="page-shell min-h-screen text-slate-900 dark:text-white">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        {!currentCategory ? (
          <>
            <section className="hero-panel mb-8 grid gap-8 rounded-[34px] p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div>
                <div className="hero-badge">Professional coding workspace</div>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Learn coding with lessons, notes, and practice in one polished place.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  StudentStack brings clean learning paths, course videos, readable notes, and an integrated
                  code terminal together so every topic feels focused and easy to follow.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => showCategory("frontend")}
                    className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950"
                  >
                    Start with Frontend
                  </button>
                  <Link
                    to="/quiz"
                    className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-xl shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-500"
                  >
                    Practice Quiz
                  </Link>
                  <button
                    onClick={() => showCategory("programming")}
                    className="rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    Explore Core Languages
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="feature-tile">
                  <BookOpen className="h-5 w-5 text-emerald-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Structured courses</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Study topics by category without bouncing between pages.</p>
                  </div>
                </div>
                <div className="feature-tile">
                  <Code2 className="h-5 w-5 text-cyan-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Live practice terminal</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Write code and test ideas while learning.</p>
                  </div>
                </div>
                <div className="feature-tile">
                  <Database className="h-5 w-5 text-violet-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Readable notes</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Clear notes and examples designed to help concepts stick.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {Object.entries(CATEGORY_META).map(([key, meta]) => {
                const Icon = meta.icon;
                return (
                  <button key={key} onClick={() => showCategory(key)} className="category-card text-left">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{meta.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{meta.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                      Open courses
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                );
              })}
            </section>
          </>
        ) : (
          <section className="hero-panel rounded-[34px] p-8 lg:p-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="hero-badge">{CATEGORY_META[currentCategory as keyof typeof CATEGORY_META]?.title} track</div>
                <h1 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">Choose a course</h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Pick a topic to open the lesson page with video, notes, and terminal practice.</p>
              </div>
              <button onClick={goBack} className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white">
                Back to Categories
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categories[currentCategory as keyof typeof categories].map((course) => (
                <button key={course} onClick={() => showCourse(course)} className="course-select-card text-left">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">Course</div>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{course}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Open the full learning workspace for {course} with video explanation, notes, and hands-on coding.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                    Open workspace
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
