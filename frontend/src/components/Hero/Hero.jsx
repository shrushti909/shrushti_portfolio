import {
  FiGithub,
  FiLinkedin,
  FiArrowDown,
  FiFileText,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";
import { profile } from "../../data/config";
import "./Hero.css";

export default function Hero({ data }) {
  const tech = data?.tech_line || [
    "Python",
    "Django",
    "Django REST Framework",
    "MySQL",
    "Java",
    "REST APIs",
  ];

  const handleScrollTo = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        {/* Left Column */}
        <div className="hero__content animate-fadeInUp">
          {/* Greeting Pill */}
          <div className="hero__greeting-pill">
            <span className="hero__pulse-dot" aria-hidden="true" />
            <span>Hi, I'm Shrushti Nandgaonkar</span>
          </div>

          {/* Mobile Avatar (Visible only on mobile) */}
          <div className="hero__mobile-avatar" aria-hidden="true">
            <span>SN</span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            Python-Django Developer{" "}
            <span className="hero__headline-accent">&amp; Backend Engineer</span>
          </h1>

          {/* Summary Tagline */}
          <p className="hero__tagline">
            MCA student and Immediate Joiner specializing in building scalable
            backend architectures, RESTful APIs, and relational databases with
            Python, Django, and Java enterprise experience.
          </p>

          {/* Monospace Tech Stack Bar */}
          <div className="hero__tech-bar" aria-label="Core technologies">
            {tech.map((item, index) => (
              <span key={item} className="hero__tech-item">
                <span className="hero__tech-name">{item}</span>
                {index < tech.length - 1 && (
                  <span className="hero__tech-dot" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="hero__ctas">
            <button
              className="btn btn-primary hero__cta-btn"
              onClick={() => handleScrollTo("projects")}
              id="hero-view-projects-btn"
            >
              <span>View Projects</span>
              <FiArrowDown size={16} />
            </button>
            <a
              href={profile.resume}
              download
              className="btn btn-secondary hero__cta-btn"
              id="hero-download-resume-btn"
            >
              <FiFileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="hero__meta-row">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__meta-link"
              aria-label="GitHub Profile"
              id="hero-github-meta"
            >
              <FiGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__meta-link"
              aria-label="LinkedIn Profile"
              id="hero-linkedin-meta"
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <span className="hero__meta-divider" aria-hidden="true" />
            <div className="hero__location">
              <FiMapPin size={16} className="hero__location-icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Right Column (Desktop Visual Identity Card) */}
        <div className="hero__card-col">
          <div className="hero__id-card">
            <div className="hero__id-card-header">
              <div className="hero__id-avatar">
                <span>SN</span>
              </div>
              <div className="hero__id-person">
                <h3 className="hero__id-name">Shrushti M. Nandgaonkar</h3>
                <p className="hero__id-role">Python &amp; Backend Developer</p>
                <p className="hero__id-sub">MCA Student • Immediate Joiner</p>
              </div>
            </div>

            {/* Frosted Glass Bottom Overlay Layer */}
            <div className="hero__id-overlay">
              <div className="hero__id-chips" aria-label="Key competencies">
                {["Python", "Django", "DRF", "MySQL", "Java", "Git"].map(
                  (chip) => (
                    <span key={chip} className="badge hero__id-chip">
                      {chip}
                    </span>
                  )
                )}
              </div>
              <div className="hero__status-badge">
                <span className="hero__status-dot" aria-hidden="true" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => handleScrollTo("about")}
        aria-label="Scroll down to About section"
      >
        <FiChevronDown size={22} className="animate-bounce" />
      </button>
    </section>
  );
}
