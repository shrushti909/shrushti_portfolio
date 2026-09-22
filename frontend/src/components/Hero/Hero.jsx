import { FiGithub, FiLinkedin, FiArrowDown, FiFileText } from "react-icons/fi";
import { profile } from "../../data/config";
import "./Hero.css";

export default function Hero({ data }) {
  const tech = data?.tech_line || ["Python", "Django", "REST APIs", "Java", "SQL"];

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__content animate-fadeInUp">
          {/* Greeting */}
          <div className="hero__greeting">
            <span className="hero__greeting-dot" aria-hidden="true" />
            <span>Hi, I'm Shrushti Nandgaonkar</span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            MCA Student &amp; Python{" "}
            <span className="hero__headline-accent">&amp; Backend Developer</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            I build backend-focused web applications using Python, Django, REST APIs, and relational
            databases, with industry experience in Java-based web development.
          </p>

          {/* Tech line */}
          <div className="hero__tech" aria-label="Core technologies">
            {tech.map((t, i) => (
              <span key={t} className="hero__tech-item">
                {t}
                {i < tech.length - 1 && <span className="hero__tech-sep" aria-hidden="true">•</span>}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero__ctas">
            <button
              className="btn btn-primary hero__cta-primary"
              onClick={handleScrollToProjects}
              id="hero-view-projects-btn"
            >
              View Projects
              <FiArrowDown size={16} />
            </button>
            <a
              href={profile.resume}
              download
              className="btn btn-secondary hero__cta-secondary"
              id="hero-resume-btn"
            >
              <FiFileText size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
              id="hero-github-link"
            >
              <FiGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
              id="hero-linkedin-link"
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <span className="hero__social-sep" aria-hidden="true" />
            <span className="hero__social-location">
              📍 Pune, Maharashtra, India
            </span>
          </div>
        </div>

        {/* Visual Identity Card */}
        <div className="hero__card animate-fadeInUp delay-300" aria-hidden="true">
          <div className="hero__card-inner">
            <div className="hero__card-avatar">
              <span>SN</span>
            </div>
            <div className="hero__card-info">
              <strong className="hero__card-name">Shrushti M. Nandgaonkar</strong>
              <span className="hero__card-role">Python &amp; Backend Developer</span>
            </div>
            <div className="hero__card-divider" />
            <div className="hero__card-stack">
              {["Python", "Django", "REST API", "Java", "SQL", "Git"].map((t) => (
                <span key={t} className="badge hero__card-badge">{t}</span>
              ))}
            </div>
            <div className="hero__card-status">
              <span className="hero__status-dot" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <FiArrowDown size={16} />
      </div>
    </section>
  );
}
