import { BookOpen, Clock, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const COURSES = [
  { id: 1, title: "JavaScript Fundamentals", level: "Beginner", duration: "6 hours", lessons: 24, color: "38 92% 50%" },
  { id: 2, title: "Python for Data Science", level: "Intermediate", duration: "8 hours", lessons: 32, color: "160 84% 39%" },
  { id: 3, title: "HTML & CSS Mastery", level: "Beginner", duration: "5 hours", lessons: 20, color: "220 84% 60%" },
  { id: 4, title: "React.js Essentials", level: "Intermediate", duration: "10 hours", lessons: 40, color: "190 90% 50%" },
  { id: 5, title: "Node.js Backend", level: "Advanced", duration: "12 hours", lessons: 36, color: "140 60% 40%" },
  { id: 6, title: "SQL & Databases", level: "Beginner", duration: "4 hours", lessons: 18, color: "280 60% 55%" },
];

export default function CoursesPage() {
  return (
    <div className="page-shell min-h-screen text-slate-900 dark:text-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="hero-panel rounded-[34px] p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="hero-badge">Curated learning paths</div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Courses built for steady progress
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Move through guided topics with clean structure, realistic pacing, and a terminal that keeps practice close.
              </p>
              <div className="mt-6">
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-500"
                >
                  <Play className="h-4 w-4" />
                  Take Practice Quiz
                </Link>
              </div>
            </div>
            <div className="feature-tile max-w-sm">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Professional flow</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Each course is presented as a focused workspace instead of a plain list.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {COURSES.map((course) => (
              <div key={course.id} className="course-select-card overflow-hidden">
                <div className="mb-5 h-2 rounded-full" style={{ background: `hsl(${course.color})` }} />
                <div className="mb-3 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {course.level}
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{course.title}</h2>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{course.duration}</span>
                  <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" />{course.lessons} lessons</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Practical lessons, notes, and exercises arranged to help you build real understanding rather than skim concepts.
                </p>
                <Link
                  to={`/course?course=${encodeURIComponent(course.title)}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950"
                >
                  <Play className="h-4 w-4" />
                  Open Course
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
