import { FiExternalLink } from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";
import "./Certifications.css";

export default function Certifications({ data }) {
  const certs = data?.certifications || [];
  const { ref } = useReveal();

  return (
    <section id="certifications" className="section section-alt" ref={ref} aria-labelledby="certs-title">
      <div className="container">
        <div className="certs__header reveal">
          <p className="section-label">Credentials</p>
          <h2 className="section-title" id="certs-title">
            Certifications
          </h2>
        </div>

        <div className="certs__list">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }) {
  const { ref } = useReveal();
  const hasUrl = cert.url && cert.url !== "null" && cert.url !== "";

  return (
    <div className="cert-card card reveal" ref={ref}>
      <div className="cert-card__info">
        <span className="cert-card__issuer-badge">{cert.issuer}</span>
        <h3 className="cert-card__name">{cert.name}</h3>
      </div>
      {hasUrl ? (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost cert-card__btn"
          aria-label={`View certificate: ${cert.name}`}
        >
          <FiExternalLink size={13} />
          View Certificate
        </a>
      ) : (
        <span
          className="cert-card__placeholder"
          title="Certificate URL to be added"
        >
          URL to be added
        </span>
      )}
    </div>
  );
}
