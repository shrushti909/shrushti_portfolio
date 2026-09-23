import { FiTarget, FiCheckCircle } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./About.css";

export default function About({ data }) {
  const about = data || portfolioData.about;
  const { ref } = useReveal();

  const defaultHighlights = [
    {
      label: "Education",
      value: "MCA (Pursuing)",
      detail: "Vishwakarma Univ • 8.5 CGPA",
    },
    {
      label: "Industry Experience",
      value: "6 Months",
      detail: "Engineer Trainee @ RapportSoft",
    },
    {
      label: "Core Specialty",
      value: "Python & Backend",
      detail: "Django, DRF & Relational DBs",
    },
  ];

  const highlights = about?.highlights || defaultHighlights;
  const focusAreas = about?.focus || [
    "Python & Django Web Framework",
    "Django REST Framework & APIs",
    "Relational Database Design (MySQL / SQLite)",
    "Role-Based Access Control (RBAC)",
    "Full-Stack Java Enterprise (JSP, JDBC)",
    "Clean Code & SDLC Best Practices",
  ];

  return (
    <section
      id="about"
      className="section"
      ref={ref}
      aria-labelledby="about-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header about__header reveal">
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-title" id="about-title">
            Who I Am
          </h2>
          <p className="section-subtitle">
            A developer dedicated to reliable backend architectures, elegant
            data schemas, and user-focused web products.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="about__grid">
          {/* Left Column: Narrative & Quick Highlights Grid */}
          <div className="about__left reveal">
            <div className="about__narrative">
              <p className="about__para">
                MCA student at Vishwakarma University, Pune, and an Immediate Joiner specializing in backend engineering with Python, Django, DRF, and MySQL. Experienced in building full-stack web applications and completing a 6-month enterprise Java internship at RapportSoft with a passion for clean architecture, scalable APIs, and robust database design.
              </p>
            </div>

            {/* Quick Highlights Grid: 3 Stat Cards */}
            <div className="about__highlights-grid" aria-label="Key highlights">
              {highlights.map((h, i) => (
                <div key={i} className="card about__highlight-card">
                  <span className="about__highlight-label">{h.label}</span>
                  <strong className="about__highlight-value">{h.value}</strong>
                  <span className="about__highlight-detail">{h.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Card (Current Focus & Core Competencies) */}
          <aside
            className="card about__focus-card reveal delay-100"
            aria-label="Current Focus & Core Competencies"
          >
            <div className="about__focus-header">
              <span className="about__focus-icon-wrap" aria-hidden="true">
                <FiTarget className="about__focus-icon" size={20} />
              </span>
              <div>
                <h3 className="about__focus-title">Current Focus</h3>
                <p className="about__focus-subtitle">Core Competencies</p>
              </div>
            </div>

            <ul className="about__focus-list">
              {focusAreas.map((item, idx) => (
                <li key={idx} className="about__focus-item">
                  <FiCheckCircle
                    size={16}
                    className="about__focus-check"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
