import { useReveal } from "../../hooks/useReveal";
import "./Activities.css";

export default function Activities({ data }) {
  const activities = data?.activities || [];
  const { ref } = useReveal();

  if (!activities.length) return null;

  return (
    <section id="activities" className="section" ref={ref} aria-labelledby="activities-title">
      <div className="container">
        <div className="activities__header reveal">
          <p className="section-label">Community</p>
          <h2 className="section-title" id="activities-title">
            Activities
          </h2>
        </div>

        <div className="activities__list">
          {activities.map((act, i) => (
            <div key={i} className="card activity-card reveal">
              <div className="activity-card__icon" aria-hidden="true">🤝</div>
              <div className="activity-card__content">
                <h3 className="activity-card__title">{act.title}</h3>
                <p className="activity-card__desc">{act.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
