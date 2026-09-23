import { FiExternalLink, FiAward } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import "./Certifications.css";

export default function Certifications({ data }) {
  const certs = data?.certifications || portfolioData.certifications;
  const { ref } = useReveal();

  return (
    <section
      id="certifications"
      className="section section--alt"
      ref={ref}
      aria-labelledby="certs-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">CREDENTIALS</span>
          <h2 className="section-title" id="certs-title">
            Certifications
          </h2>
          <p className="section-subtitle">
            Verified technical coursework, skill badges, and algorithmic
            assessments.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs__grid">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const { ref } = useReveal();
  const hasUrl = cert.url && cert.url !== "null" && cert.url !== "";

  return (
    <div
      className="card cert-card reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="cert-card__top">
        <div className="cert-card__issuer-group">
          <span className="cert-card__issuer-badge">{cert.issuer}</span>
          {cert.year && <span className="cert-card__year">{cert.year}</span>}
        </div>
        <div className="cert-card__icon-wrap" aria-hidden="true">
          <FiAward size={18} className="cert-card__award-icon" />
        </div>
      </div>

      <div className="cert-card__body">
        <h3 className="cert-card__name">{cert.name}</h3>
        {cert.note && <p className="cert-card__note">{cert.note}</p>}
      </div>

      <div className="cert-card__action">
        {hasUrl ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost cert-card__btn"
            aria-label={`View certificate for ${cert.name}`}
          >
            <FiExternalLink size={14} />
            <span>View Certificate</span>
          </a>
        ) : (
          <span className="cert-card__verified-badge">
            ✓ Credential Verified
          </span>
        )}
      </div>
    </div>
  );
}
