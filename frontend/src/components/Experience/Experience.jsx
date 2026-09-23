import { FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

export default function Experience({ data }) {
  const experiences = data?.experience || portfolioData.experience;
  const { ref } = useReveal();

  return (
    <section
      id="experience"
      className="section section--alt"
      ref={ref}
      aria-labelledby="experience-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">WORK HISTORY</span>
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
          <p className="section-subtitle">
            Professional engineering internships and technical industry
            contributions.
          </p>
        </div>

        {/* Vertical Spine Timeline */}
        <div className="experience__timeline">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const { ref } = useReveal();

  return (
    <div
      className="exp-item reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline Spine */}
      <div className="exp-item__spine" aria-hidden="true">
        <span className="exp-item__year">{exp.start_year || "2024"}</span>
        <div className="exp-item__line" />
        <div className="exp-item__node" />
        <div className="exp-item__line" />
        <span className="exp-item__year">{exp.end_year || "2025"}</span>
      </div>

      {/* Experience Card */}
      <article className="card exp-item__card">
        <div className="exp-card__header">
          <div>
            <div className="exp-card__role-row">
              <h3 className="exp-card__position">{exp.position}</h3>
              <span className="badge-status">
                ● {exp.project_name || "Enterprise Development"}
              </span>
            </div>

            <div className="exp-card__company-row">
              {exp.company_url ? (
                <a
                  href={exp.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-card__company-link"
                >
                  <span>{exp.company}</span>
                  <FiExternalLink size={13} />
                </a>
              ) : (
                <span className="exp-card__company-name">{exp.company}</span>
              )}
            </div>
          </div>

          <div className="exp-card__meta-tags">
            <div className="exp-card__meta-item">
              <FiCalendar size={14} className="exp-card__icon" />
              <span>{exp.duration}</span>
            </div>
            <div className="exp-card__meta-item">
              <FiMapPin size={14} className="exp-card__icon" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <p className="exp-card__desc">{exp.description}</p>

        {/* Key Responsibilities & Deliverables */}
        <div className="exp-card__responsibilities">
          <h4 className="exp-card__resp-title">
            Key Responsibilities &amp; Deliverables
          </h4>
          <ul className="exp-card__resp-list">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="exp-card__resp-item">
                <span className="exp-card__resp-dot" aria-hidden="true" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
