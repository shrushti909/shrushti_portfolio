import { useState } from "react";
import { FiGithub, FiExternalLink, FiCheck, FiLock } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Projects.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "Team Project", value: "team" },
];

export default function Projects({ data }) {
  const projects = data?.projects || portfolioData.projects;
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref } = useReveal();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      aria-labelledby="projects-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">FEATURED WORK</span>
          <h2 className="section-title" id="projects-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack platforms, backend architectures, and
            collaborative enterprise solutions.
          </p>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          className="projects__filters reveal"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`projects__filter-pill ${
                activeFilter === f.value ? "projects__filter-pill--active" : ""
              }`}
              onClick={() => setActiveFilter(f.value)}
              id={`filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects__grid" aria-live="polite">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { ref } = useReveal();

  const hasGithub =
    project.github_url &&
    project.github_url !== "GITHUB_URL" &&
    !project.isPrivate;

  return (
    <article
      className="card project-card reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={project.name}
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__title-group">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
        {project.status && (
          <span
            className={`badge-status ${
              project.status === "Active" ? "badge-status--green" : ""
            }`}
          >
            ● {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tech Stack Badges */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Key Features & Architecture Box */}
      <div className="project-card__features-box">
        <h4 className="project-card__features-title">
          Key Features &amp; Architecture
        </h4>
        <ul className="project-card__features-list">
          {project.features.map((feat, i) => (
            <li key={i} className="project-card__feature-item">
              <FiCheck
                size={14}
                className="project-card__check-icon"
                aria-hidden="true"
              />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Actions */}
      <div className="project-card__actions">
        {hasGithub ? (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__btn"
            aria-label={`${project.name} repository`}
          >
            <FiGithub size={15} />
            <span>View Repository</span>
          </a>
        ) : (
          <button
            className="btn btn-secondary project-card__btn"
            disabled
            title="Private or internal repository"
            aria-label="Private repository"
          >
            <FiLock size={14} />
            <span>Private Repository</span>
          </button>
        )}

        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-card__btn"
            aria-label={`${project.name} Live Demo`}
          >
            <FiExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}
