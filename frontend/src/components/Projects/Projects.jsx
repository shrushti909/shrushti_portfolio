import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";
import "./Projects.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Team Project", value: "team" },
];

export default function Projects({ data }) {
  const projects = data?.projects || [];
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref } = useReveal();

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" ref={ref} aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__header reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title" id="projects-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of web applications I've designed and developed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filters" role="tablist" aria-label="Project filter">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`projects__filter-btn ${activeFilter === f.value ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
              id={`filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects__grid" aria-live="polite">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { ref } = useReveal();

  const isPlaceholderGithub =
    !project.github_url || project.github_url === "GITHUB_URL";

  return (
    <article className="card project-card reveal" ref={ref} aria-label={project.name}>
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__title-group">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
        {project.status && (
          <span className="badge-status project-card__status">{project.status}</span>
        )}
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tech Badges */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>

      {/* Key Features */}
      <div className="project-card__features">
        <h4 className="project-card__features-title">Key Features</h4>
        <ul className="project-card__features-list">
          {project.features.map((f) => (
            <li key={f} className="project-card__feature-item">
              <span aria-hidden="true">•</span> {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        {isPlaceholderGithub ? (
          <button
            className="btn btn-secondary project-card__btn"
            disabled
            title="GitHub URL to be added"
            aria-label="GitHub link — to be configured"
          >
            <FiGithub size={15} />
            GitHub
          </button>
        ) : (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__btn"
            aria-label={`${project.name} GitHub repository`}
          >
            <FiGithub size={15} />
            GitHub
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-card__btn"
            aria-label={`${project.name} live demo`}
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
