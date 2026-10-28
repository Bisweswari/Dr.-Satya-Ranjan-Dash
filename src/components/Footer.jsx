import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-2xl font-bold text-gold">
            Dr. Satya Ranjan Dash
          </p>
          <p className="mt-3 text-sm text-white/70">
            Research, education and academic collaboration.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/80">
          <Link to="/research" className="hover:text-gold">
            Publications
          </Link>
          <Link to="/workshops" className="hover:text-gold">
            Workshops
          </Link>
          <Link to="/forums" className="hover:text-gold">
            Research Forums
          </Link>
          <Link to="/scholars" className="hover:text-gold">
            Scholars & Edited Books
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-5 text-xs text-white/50">
        © {new Date().getFullYear()} Dr. Satya Ranjan Dash. All rights reserved.
      </div>
    </footer>
  );
}
