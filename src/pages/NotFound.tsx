import { Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="page-shell min-h-screen text-slate-900 dark:text-white">
      <Navbar />
      <main className="relative z-10 mx-auto flex max-w-4xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <section className="hero-panel mx-auto w-full rounded-[34px] p-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/10">
            <SearchX className="h-10 w-10 text-rose-500" />
          </div>
          <div className="mt-6 hero-badge mx-auto w-fit">404 error</div>
          <h1 className="mt-5 font-display text-5xl font-bold text-slate-950 dark:text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            The page you tried to open does not exist or may have been moved. Let us take you back to the main workspace.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </section>
      </main>
    </div>
  );
}
