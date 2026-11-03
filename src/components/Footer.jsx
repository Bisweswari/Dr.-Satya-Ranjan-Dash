import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="group/footer relative isolate overflow-hidden bg-ink px-6 py-12 text-white md:px-8">
      {/* Full-section animated diamond pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full text-slate-300/[0.025] transition-colors duration-700 group-hover/footer:text-slate-300/[0.045]"
          viewBox="0 0 300 150"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M150 0 L75 75 L150 150 L225 75 Z" stroke="currentColor" />
          <path d="M75 75 L225 75 M150 0 L150 150" stroke="currentColor" />
          <path d="M0 0 L150 150 L300 0" stroke="currentColor" />
          <path d="M0 150 L150 0 L300 150" stroke="currentColor" />
          <path d="M0 75 L150 0 L300 75" stroke="currentColor" />
          <path d="M0 75 L150 150 L300 75" stroke="currentColor" />
        </svg>

        {/* Animated light sweep */}
        <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-teal/[0.015] to-transparent transition-transform duration-[1800ms] ease-in-out group-hover/footer:translate-x-full" />

        {/* Soft background glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal/[0.025] blur-3xl transition-all duration-700 group-hover/footer:bg-teal/[0.04]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/[0.02] blur-3xl transition-all duration-700 group-hover/footer:bg-gold/[0.035]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-2xl font-bold text-gold transition-all duration-500 hover:text-amber-300">
            Dr. Satya Ranjan Dash
          </p>
          <p className="mt-3 text-sm text-white/70 transition-colors duration-500 hover:text-white">
            Research, education and academic collaboration.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/80">
          <Link
            to="/research"
            className="transition-all duration-300 hover:translate-x-1 hover:text-gold"
          >
            Research & Publications
          </Link>

          <Link
            to="/workshops"
            className="transition-all duration-300 hover:translate-x-1 hover:text-gold"
          >
            Workshops & Summer Schools
          </Link>

          <Link
            to="/scholars"
            className="transition-all duration-300 hover:translate-x-1 hover:text-gold"
          >
            Scholars & Edited Books
          </Link>

          <Link
            to="/engagements-beyond"
            className="transition-all duration-300 hover:translate-x-1 hover:text-gold"
          >
            Engagements & Beyond
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-5 text-xs text-white/50 transition-colors duration-500 hover:border-teal/40 hover:text-white/70">
        © {new Date().getFullYear()} Dr. Satya Ranjan Dash. All rights reserved.
      </div>
    </footer>
  );
}
