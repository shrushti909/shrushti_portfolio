import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Activities.css";

export default function Activities({ data }) {
  const activities = data?.activities || portfolioData.activities;
  const { ref } = useReveal();

  if (!activities || !activities.length) return null;

  return (
    <section
      id="activities"
      className="section"
      ref={ref}
      aria-labelledby="activities-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">EXTRACURRICULAR &amp; LEADERSHIP</span>
          <h2 className="section-title" id="activities-title">
            Activities &amp; Leadership
          </h2>
          <p className="section-subtitle">
            Community involvement, startup sessions, and ecosystem contributions.
          </p>
        </div>

        {/* Activities List */}
        <div className="activities__grid">
          {activities.map((act, i) => (
            <div
              key={i}
              className="card activity-card reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="activity-card__header">
                <div className="activity-card__icon-box" aria-hidden="true">
                  🚀
                </div>
                <div className="activity-card__title-group">
                  <div className="activity-card__status-row">
                    <span className="badge-status">
                      ● {act.role || "Community Volunteer"}
                    </span>
                    {act.organization && (
                      <span className="activity-card__org">
                        {act.organization}
                      </span>
                    )}
                  </div>
                  <h3 className="activity-card__title">{act.title}</h3>
                </div>
              </div>
              <p className="activity-card__desc">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
