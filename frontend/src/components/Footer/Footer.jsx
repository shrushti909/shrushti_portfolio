import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../../data/config";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Name & tagline */}
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__tagline">Python · Django · Java · Backend Development</span>
        </div>

        {/* Social links */}
        <nav className="footer__links" aria-label="Footer social links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
            id="footer-github"
          >
            <FiGithub size={16} />
            <span>GitHub</span>
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
            id="footer-linkedin"
          >
            <FiLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a
            href={`mailto:${profile.email}`}
            className="footer__link"
            aria-label="Email"
            id="footer-email"
          >
            <FiMail size={16} />
            <span>Email</span>
          </a>
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          &copy; 2026 Shrushti Manohar Nandgaonkar
        </p>
      </div>
    </footer>
  );
}
