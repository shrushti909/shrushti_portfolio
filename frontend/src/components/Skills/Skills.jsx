import { useReveal } from "../../hooks/useReveal";
import "./Skills.css";

export default function Skills({ data }) {
  const skills = data?.skills || [];
  const { ref } = useReveal();

  return (
    <section id="skills" className="section section-alt" ref={ref} aria-labelledby="skills-title">
      <div className="container">
        <div className="skills__header reveal">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title" id="skills-title">
            Technical Skills
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to build backend-focused web applications.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((category, i) => (
            <div
              key={category.category}
              className={`card skills__card reveal`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="skills__category-title">
                <span className="skills__category-icon" aria-hidden="true">
                  {getCategoryIcon(category.category)}
                </span>
                {category.category}
              </h3>
              <div className="skills__badges">
                {category.skills.map((skill) => (
                  <span key={skill} className="badge skills__badge" role="listitem">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getCategoryIcon(category) {
  const icons = {
    "Backend Development": "⚙️",
    Frontend: "🖥️",
    Databases: "🗄️",
    "CS Fundamentals": "📐",
    "Computer Science Fundamentals": "📐",
    "Developer Tools": "🛠️",
  };
  return icons[category] || "📦";
}
