import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CodeTerminal from "@/components/CodeTerminal";
import { courseNotes, videos } from "@/data";
import type { Language } from "@/lib/offlineTerminal";

export default function CoursePage() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("course");
  const isValidCourse = Boolean(courseName && courseNotes[courseName as keyof typeof courseNotes]);
  const terminalLanguage = isValidCourse && courseName ? (courseName as Language) : "JavaScript";

  useEffect(() => {
    document.title = isValidCourse && courseName ? `${courseName} - StudentStack` : "Course Not Found - StudentStack";

    const savedTheme = localStorage.getItem("theme");
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, [courseName, isValidCourse]);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  };

  const closeWindow = () => {
    window.close();
  };

  if (!isValidCourse || !courseName) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-900 dark:text-white">
        <header className="bg-gray-900 py-8 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold">
            Student<span className="text-green-400">Stack</span>
          </h1>
          <p className="mb-4 text-lg opacity-90">Your premium gateway to coding mastery</p>
          <button
            onClick={toggleTheme}
            className="mr-4 rounded-lg border border-green-300 bg-green-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-green-500"
          >
            Toggle Theme
          </button>
          <button
            onClick={closeWindow}
            className="rounded-lg border border-red-300 bg-red-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-red-500"
          >
            Close
          </button>
        </header>
        <main className="p-8 text-center">
          <p>The requested course could not be found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="course-page-shell min-h-screen text-gray-900 transition-colors dark:text-white">
      <div className="course-page-bg" aria-hidden="true">
        <span className="course-orb course-orb-one" />
        <span className="course-orb course-orb-two" />
        <span className="course-grid-glow" />
      </div>

      <header className="course-hero mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="course-hero-panel">
          <div>
            <div className="course-badge">Focused learning workspace</div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {courseName} Course
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
              Watch the lesson, read clean notes, and practice side by side in one workspace designed to
              stay easy on the eyes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-xl border border-emerald-300 bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-500"
            >
              Toggle Theme
            </button>
            <button
              onClick={closeWindow}
              className="rounded-xl border border-rose-300 bg-rose-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-500"
            >
              Close
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)] lg:px-8">
          <div className="space-y-8">
            <div className="course-panel overflow-hidden rounded-[28px] p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
                    Video lesson
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Watch and follow along</h2>
                </div>
                <div className="hidden rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:block">
                  Learn | Practice | Repeat
                </div>
              </div>

              {videos[courseName] ? (
                <div className="video-frame">
                  <iframe
                    src={videos[courseName]}
                    className="h-[260px] w-full rounded-[22px] border-0 shadow-xl sm:h-[360px] lg:h-[420px]"
                    allowFullScreen
                    title={`${courseName} video`}
                  ></iframe>
                </div>
              ) : (
                <p className="rounded-2xl bg-slate-100 p-6 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Video coming soon
                </p>
              )}
            </div>

            <article className="course-notes-panel rounded-[28px] p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                    Notes
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Readable study notes</h2>
                </div>
                <div className="rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  Bigger text | cleaner spacing
                </div>
              </div>

              <div
                className="course-notes-content"
                dangerouslySetInnerHTML={{ __html: courseNotes[courseName] }}
              ></div>
            </article>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="course-panel rounded-[28px] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">
                    Practice
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Try code live</h2>
                </div>
              </div>
              <CodeTerminal initialLanguage={terminalLanguage} />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
