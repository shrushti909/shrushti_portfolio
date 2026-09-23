import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { profile } from "../../data/config";
import { useReveal } from "../../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const { ref } = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const emailSubject = encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    );
    const emailBody = encodeURIComponent(
      `Hi Shrushti,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n-- Sent from your Developer Portfolio Website`
    );

    const mailtoUrl = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;

    // Show temporary success toast
    setToastMessage(
      "Message prepared! Opening your mail client to send to officialshrushti909@gmail.com."
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section section--alt"
      ref={ref}
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title" id="contact-title">
            Start a Conversation
          </h2>
          <p className="section-subtitle">
            Whether you have an opportunity, a technical question, or would like
            to discuss backend architecture, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact__container">
          {/* Left Column: Info Boxes & Quick Actions */}
          <div className="contact__info-col reveal">
            <h3 className="contact__col-title">Direct Information</h3>
            <p className="contact__col-desc">
              I am based in Pune, Maharashtra, and available for immediate
              joining in Python/Django Backend and Full-Stack Engineering roles.
            </p>

            {/* 3 Info Boxes */}
            <div className="contact__boxes">
              <a
                href={`mailto:${profile.email}`}
                className="card contact__box"
                id="contact-box-email"
              >
                <div className="contact__box-icon-wrap" aria-hidden="true">
                  <FiMail size={20} className="contact__box-icon" />
                </div>
                <div className="contact__box-text">
                  <span className="contact__box-label">Email</span>
                  <strong className="contact__box-value">{profile.email}</strong>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="card contact__box"
                id="contact-box-phone"
              >
                <div className="contact__box-icon-wrap" aria-hidden="true">
                  <FiPhone size={20} className="contact__box-icon" />
                </div>
                <div className="contact__box-text">
                  <span className="contact__box-label">Phone</span>
                  <strong className="contact__box-value">
                    {profile.phoneDisplay || profile.phone}
                  </strong>
                </div>
              </a>

              <div className="card contact__box">
                <div className="contact__box-icon-wrap" aria-hidden="true">
                  <FiMapPin size={20} className="contact__box-icon" />
                </div>
                <div className="contact__box-text">
                  <span className="contact__box-label">Location</span>
                  <strong className="contact__box-value">{profile.location}</strong>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Row */}
            <div className="contact__quick-actions">
              <h4 className="contact__quick-title">Quick Connect</h4>
              <div className="contact__actions-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-primary"
                  id="contact-action-email"
                >
                  <FiMail size={16} />
                  <span>Email Me</span>
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact__whatsapp-btn"
                  id="contact-action-whatsapp"
                >
                  <FiMessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="contact-action-linkedin"
                >
                  <FiLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="contact-action-github"
                >
                  <FiGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.resume}
                  download
                  className="btn btn-secondary"
                  id="contact-action-resume"
                >
                  <FiFileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="contact__form-col reveal delay-100">
            <div className="card contact__form-card">
              <h3 className="contact__form-title">Send a Direct Message</h3>
              <p className="contact__form-sub">
                Fill in your details below to compose a direct message.
              </p>

              {toastMessage && (
                <div
                  className="contact__toast animate-fadeInUp"
                  role="status"
                  aria-live="polite"
                >
                  <FiCheckCircle size={18} className="contact__toast-icon" />
                  <span>{toastMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group">
                  <label htmlFor="contact-name" className="contact__label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="contact__input"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-email-input" className="contact__label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="contact__input"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-subject" className="contact__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Backend Developer Opportunity / Project Inquiry"
                    className="contact__input"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-message" className="contact__label">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Shrushti, we would love to connect with you regarding..."
                    className="contact__input contact__textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit-btn"
                  id="contact-submit-btn"
                >
                  <FiSend size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
