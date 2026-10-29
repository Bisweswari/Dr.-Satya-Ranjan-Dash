import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, House } from "lucide-react";

const links = [
  { label: "Research & Publications", to: "/research" },
  { label: "Clubs & Societies", to: "/clubs" },
  { label: "Workshops & Summer Schools", to: "/workshops" },
  { label: "Scholars & Edited Books", to: "/scholars" },
  { label: "Engagements & Beyond", to: "/engagements-beyond" },
];

const linkClass = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive ? "text-teal" : "text-ink hover:text-teal"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-paper px-6 pt-5 md:px-8">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <NavLink
            to="/"
            end
            aria-label="Home"
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-xl font-bold transition-colors md:text-2xl ${
                isActive ? "text-teal" : "text-black"
              }`
            }
          >
            <House size={22} className="shrink-0" />
            <span>Dr. Satya Ranjan Dash</span>
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="p-1 text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div className="mt-3 flex flex-col border-t border-ink/20 py-2 lg:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm transition-colors ${
                    isActive ? "text-teal" : "text-ink hover:text-teal"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
