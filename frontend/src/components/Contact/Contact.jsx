import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { profile } from "../../data/config";
import { useReveal } from "../../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const { ref } = useReveal();

  return (
    <section id="contact" className="section section-alt" ref={ref} aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__content reveal">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title" id="contact-title">
              Let's Connect
            </h2>
            <p className="contact__desc">
              I am currently looking for opportunities in software development and backend
              development. Feel free to reach out — I will get back to you as soon as possible.
            </p>

            {/* Info */}
            <div className="contact__info">
              <a href={`mailto:${profile.email}`} className="contact__info-item" id="contact-email-link">
                <span className="contact__info-icon">
                  <FiMail size={18} />
                </span>
                <div>
                  <span className="contact__info-label">Email</span>
                  <span className="contact__info-value">{profile.email}</span>
                </div>
              </a>
              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <span className="contact__info-label">Location</span>
                  <span className="contact__info-value">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="contact__ctas">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
                id="contact-email-btn"
                aria-label="Send email to Shrushti"
              >
                <FiMail size={16} />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="contact-linkedin-btn"
                aria-label="Shrushti's LinkedIn profile"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="contact-github-btn"
                aria-label="Shrushti's GitHub profile"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={profile.resume}
                download
                className="btn btn-secondary"
                id="contact-resume-btn"
                aria-label="Download Shrushti's resume"
              >
                <FiFileText size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
