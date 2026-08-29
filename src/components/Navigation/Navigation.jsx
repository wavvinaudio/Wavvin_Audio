import { useState } from "react";
import "./Navigation.css";

const links = [
  { name: "HOME", target: "home" },
  { name: "IDENTITY", target: "identity" },
  { name: "PACKS", target: "packs" },
  { name: "MEDIA", target: "media" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navigation">
      <button
        className="nav-logo"
        onClick={() => scrollToSection("home")}
      >
        WAVVIN
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <button
            key={link.target}
            onClick={() => scrollToSection(link.target)}
          >
            {link.name}
          </button>
        ))}

        <a
          href="https://www.instagram.com/wavvin.audio"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          INSTAGRAM ↗️
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </header>
  );
}

export default Navigation;
