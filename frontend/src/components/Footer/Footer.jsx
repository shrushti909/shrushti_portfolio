import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import { profile } from "../../data/config";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand Name & Tagline */}
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__tagline">
            Python-Django Developer &amp; Backend Engineer • Immediate Joiner
          </span>
        </div>

        {/* Pipeline-Separated Links */}
        <nav className="footer__links" aria-label="Footer links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
            id="footer-github"
          >
            <FiGithub size={15} />
            <span>GitHub</span>
          </a>
          <span className="footer__sep" aria-hidden="true">
            |
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
            id="footer-linkedin"
          >
            <FiLinkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <span className="footer__sep" aria-hidden="true">
            |
          </span>
          <a
            href={profile.liveStoreUrl || "https://github.com/shrushti909/food_dash"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Live Store / Featured Repository"
            id="footer-livestore"
          >
            <FiExternalLink size={15} />
            <span>FoodDash</span>
          </a>
          <span className="footer__sep" aria-hidden="true">
            |
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="footer__link"
            aria-label="Email"
            id="footer-email"
          >
            <FiMail size={15} />
            <span>Email</span>
          </a>
          <span className="footer__sep" aria-hidden="true">
            |
          </span>
          <a
            href={profile.resume}
            download
            className="footer__link"
            aria-label="Resume PDF"
            id="footer-resume"
          >
            <FiFileText size={15} />
            <span>Resume PDF</span>
          </a>
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          &copy; {currentYear} {profile.name}. All rights reserved. Crafted with
          React, Vite &amp; Vanilla CSS.
        </p>
      </div>
    </footer>
  );
}
