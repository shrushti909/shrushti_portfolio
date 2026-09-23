import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Education.css";

export default function Education({ data }) {
  const education = data?.education || portfolioData.education;
  const { ref } = useReveal();

  return (
    <section
      id="education"
      className="section"
      ref={ref}
      aria-labelledby="education-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">ACADEMIC BACKGROUND</span>
          <h2 className="section-title" id="education-title">
            Education
          </h2>
          <p className="section-subtitle">
            Formal education credentials in Computer Applications and Sciences.
          </p>
        </div>

        {/* Degree Cards Grid */}
        <div className="education__grid">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }) {
  const { ref } = useReveal();

  const isPercentage =
    edu.isScorePercentage || (edu.cgpa && String(edu.cgpa).includes("%"));

  return (
    <article
      className="card edu-card reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`${edu.degree} from ${edu.university}`}
    >
      <div className="edu-card__top">
        {/* 56x56 Monogram Box */}
        <div className="edu-card__monogram" aria-hidden="true">
          {edu.degree}
        </div>

        {/* Status Badge */}
        {edu.status && (
          <span
            className={`badge-status ${
              edu.status === "Pursuing" ? "" : "badge-status--green"
            }`}
          >
            ● {edu.status}
          </span>
        )}
      </div>

      <div className="edu-card__body">
        <h3 className="edu-card__full-degree">{edu.full_degree}</h3>
        <p className="edu-card__university">{edu.university}</p>
        <p className="edu-card__location">📍 {edu.location}</p>
      </div>

      <div className="edu-card__footer">
        <div className="edu-card__meta">
          <span className="edu-card__duration-label">Duration</span>
          <span className="edu-card__duration">{edu.duration}</span>
        </div>
        <div className="edu-card__score">
          <span className="edu-card__score-label">
            {isPercentage ? "Percentage" : "CGPA"}
          </span>
          <span className="edu-card__score-value">{edu.cgpa}</span>
        </div>
      </div>
    </article>
  );
}
