import { useReveal } from "../../hooks/useReveal";
import "./Education.css";

export default function Education({ data }) {
  const education = data?.education || [];
  const { ref } = useReveal();

  return (
    <section id="education" className="section" ref={ref} aria-labelledby="education-title">
      <div className="container">
        <div className="education__header reveal">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title" id="education-title">
            Education
          </h2>
        </div>

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

  return (
    <article
      className={`card edu-card reveal`}
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`${edu.degree} from ${edu.university}`}
    >
      {/* Degree badge */}
      <div className="edu-card__degree-badge">{edu.degree}</div>

      <div className="edu-card__body">
        <h3 className="edu-card__full-degree">{edu.full_degree}</h3>
        <p className="edu-card__university">{edu.university}</p>
        <p className="edu-card__location">📍 {edu.location}</p>
      </div>

      <div className="edu-card__footer">
        <div className="edu-card__meta">
          <span className="edu-card__duration">{edu.duration}</span>
          {edu.status && <span className="edu-card__status">{edu.status}</span>}
        </div>
        <div className="edu-card__cgpa">
          <span className="edu-card__cgpa-label">CGPA</span>
          <span className="edu-card__cgpa-value">{edu.cgpa}</span>
        </div>
      </div>
    </article>
  );
}
