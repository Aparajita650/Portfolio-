import { useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../data/portfolio";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-switch"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme-switch-track">
        <span className={`theme-switch-thumb ${isDark ? "is-dark" : "is-light"}`}>
          {isDark ? <Moon size={15} strokeWidth={2.4} /> : <Sun size={15} strokeWidth={2.4} />}
        </span>
        <span className={`theme-switch-icon theme-switch-sun ${isDark ? "muted" : ""}`}>
          <Sun size={14} />
        </span>
        <span className={`theme-switch-icon theme-switch-moon ${isDark ? "" : "muted"}`}>
          <Moon size={14} />
        </span>
      </span>
    </button>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="container-shell navbar-inner">
        <button onClick={() => go("home")} className="brand" aria-label="Go to homepage">
          <span className="brand-mark">A</span>
          <span className="brand-name">
            APARAJITA<span>.</span>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="nav-link">
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Exactly one theme switch is rendered and remains visible on every screen size. */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a href="/Aparajita-Resume.pdf" download className="btn-primary nav-resume">
            <Download size={15} />
            Resume
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="container-shell mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="mobile-nav-link">
              {label}
            </button>
          ))}
          <a href="/Aparajita-Resume.pdf" download className="btn-primary mobile-resume">
            <Download size={15} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
