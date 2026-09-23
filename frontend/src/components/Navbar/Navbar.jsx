import { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { profile } from "../../data/config";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop or Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="container navbar__inner">
        {/* Brand Logo & Monogram */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          aria-label="Back to top"
        >
          <span className="navbar__logo-monogram" aria-hidden="true">
            S
          </span>
          <span className="navbar__logo-text">
            <strong>Shrushti</strong> Nandgaonkar
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
                {isActive && <span className="navbar__indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons Row */}
        <div className="navbar__actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub profile"
            title="GitHub Repository Profile"
            id="nav-github"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn profile"
            title="LinkedIn Profile"
            id="nav-linkedin"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.resume}
            download
            className="btn btn-primary navbar__resume-btn"
            aria-label="Download Resume PDF"
            id="nav-resume"
          >
            <FiFileText size={15} />
            <span>Resume</span>
          </a>
          <button
            className="btn-icon"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light theme" : "Dark theme"}
            id="theme-toggle-btn"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          {/* Hamburger Icon */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="navbar__mobile navbar__mobile--open"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="navbar__mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="navbar__mobile-divider" />
            <div className="navbar__mobile-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary navbar__mobile-btn"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary navbar__mobile-btn"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
            <a
              href={profile.resume}
              download
              className="btn btn-primary navbar__mobile-resume"
            >
              <FiFileText size={16} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
