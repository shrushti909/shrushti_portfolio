import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Skills.css";

export default function Skills({ data }) {
  const skills = data?.skills || portfolioData.skills;
  const { ref } = useReveal();

  return (
    <section
      id="skills"
      className="section section--alt"
      ref={ref}
      aria-labelledby="skills-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">WHAT I WORK WITH</span>
          <h2 className="section-title" id="skills-title">
            Technical Skills
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, backend
            frameworks, databases, and engineering principles in my toolkit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills__grid">
          {skills.map((cat, i) => (
            <div
              key={cat.category}
              className="card skills__card reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="skills__category-title">
                <span className="skills__category-icon" aria-hidden="true">
                  {cat.icon || getCategoryIcon(cat.category)}
                </span>
                <span>{cat.category}</span>
              </h3>
              <div
                className="skills__badges"
                role="list"
                aria-label={`${cat.category} skills`}
              >
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge skills__badge"
                    role="listitem"
                  >
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
    "Backend Engineering": "⚙️",
    "Frontend & Web": "🖥️",
    "Databases & Storage": "🗄️",
    "CS Fundamentals": "📐",
    "Computer Science Fundamentals": "📐",
    "Developer Tools": "🛠️",
    "Professional Soft Skills": "💡",
  };
  return icons[category] || "📦";
}
