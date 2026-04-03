import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, SunMedium } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="app-navbar">
      <div className="app-navbar-inner">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-xl font-bold text-emerald-600 dark:text-emerald-300">
            S
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-slate-950 dark:text-white">
              Student<span className="text-emerald-500">Stack</span>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Learn faster with code-first lessons</div>
          </div>
        </Link>

        <nav className="app-nav-links">
          <NavLink to="/" className={({ isActive }) => `app-nav-link ${isActive ? "app-nav-link-active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => `app-nav-link ${isActive ? "app-nav-link-active" : ""}`}>
            Courses
          </NavLink>
          <NavLink to="/terminal" className={({ isActive }) => `app-nav-link ${isActive ? "app-nav-link-active" : ""}`}>
            Terminal
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => `app-nav-link ${isActive ? "app-nav-link-active" : ""}`}>
            Quiz
          </NavLink>
        </nav>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
