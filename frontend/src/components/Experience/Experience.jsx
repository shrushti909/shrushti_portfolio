import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

export default function Experience({ data }) {
  const experiences = data?.experience || [];
  const { ref } = useReveal();

  return (
    <section id="experience" className="section section-alt" ref={ref} aria-labelledby="experience-title">
      <div className="container">
        <div className="experience__header reveal">
          <p className="section-label">Work History</p>
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const { ref } = useReveal();

  return (
    <div className="exp-item reveal" ref={ref}>
      {/* Timeline spine */}
      <div className="exp-item__spine" aria-hidden="true">
        <div className="exp-item__year exp-item__year--start">{exp.start_year}</div>
        <div className="exp-item__line" />
        <div className="exp-item__dot" />
        <div className="exp-item__line" />
        <div className="exp-item__year exp-item__year--end">{exp.end_year}</div>
      </div>

      {/* Card */}
      <article className="card exp-item__card">
        <div className="exp-card__header">
          <div>
            <h3 className="exp-card__position">{exp.position}</h3>
            <div className="exp-card__company">
              <span className="exp-card__company-name">{exp.company}</span>
              <span className="exp-card__separator" aria-hidden="true">·</span>
              <span className="exp-card__location">{exp.location}</span>
            </div>
          </div>
          <div className="exp-card__meta">
            <span className="exp-card__duration">{exp.duration}</span>
            <span className="exp-card__project">Project: {exp.project_name}</span>
          </div>
        </div>

        <p className="exp-card__desc">{exp.description}</p>

        <div className="exp-card__responsibilities">
          <h4 className="exp-card__resp-title">Responsibilities</h4>
          <ul className="exp-card__resp-list">
            {exp.responsibilities.map((r, i) => (
              <li key={i} className="exp-card__resp-item">
                <span className="exp-card__resp-dot" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
