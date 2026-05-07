import React, { useState } from "react";
import Pad from "../UI/Pad";
import Button from "../UI/Button";
import CyberToast from "../UI/CyberToast";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const ContactItem = ({ icon, label, value, link }) => (
  <div className="contact-item">
    <span className="contact-icon">{icon}</span>
    <div>
      <div className="contact-label">{label}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="contact-value">
        {value}
      </a>
    </div>
  </div>
);

/**
 * Contact section component.
 * Provides a contact form and direct communication channels.
 */
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Anti-spam rate limiting (5 minutes)
    const lastSent = localStorage.getItem("last_contact_time");
    if (lastSent && Date.now() - parseInt(lastSent) < 5 * 60 * 1000) {
      setToast({
        message: "COMMUNICATION_PROTOCOL_COOLDOWN ACTIVE. Please wait 5 minutes between transmissions.",
        type: "warning"
      });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    const formData = new FormData(e.target);
    // TODO: Replace with your actual Web3Forms access key from your dashboard
    // It's highly recommended to use an environment variable (e.g., import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("last_contact_time", Date.now().toString());
        setToast({ message: "Transmission Successful. Message received.", type: "success" });
        e.target.reset(); // Clear the form
      } else {
        setToast({ message: data.message || "Transmission Failed. Unknown error.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Network Error. Connection interrupted.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">ESTABLISH CONNECTION</h2>
        <div className="segment-topbar__overline">
          CONTACT_PROTOCOL // DIRECT_LINE // RESPONSE_GUARANTEED
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-form-col">
          <Pad>
            <h3 className="text-heading3" style={{ marginBottom: "1rem" }}>
              Send Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <div className="form-control">
                  <input id="name" name="name" type="text" required placeholder="Enter your name..." />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="form-control">
                  <input id="email" name="email" type="email" required placeholder="your@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <div className="form-control">
                  <input id="subject" name="subject" type="text" required placeholder="What is this regarding?" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <div className="form-control">
                  <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
                </div>
              </div>

              <Button size="xl" variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Transmitting..." : "Transmit Message"}
              </Button>
            </form>
          </Pad>
        </div>

        <div className="contact-info-col">
          <Pad>
            <h3 className="text-heading3" style={{ marginBottom: "1rem" }}>
              Direct Channels
            </h3>

            <ContactItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="linkedin.com/in/anmol-verma-mru"
              link="https://www.linkedin.com/in/anmol-verma-mru/"
            />
            <ContactItem
              icon={<FaGithub />}
              label="GitHub"
              value="github.com/AnmolVerma7"
              link="https://github.com/AnmolVerma7"
            />
            <ContactItem
              icon={<FaDiscord />}
              label="Discord"
              value="AnmolVerma7"
              link="https://discordapp.com/users/430887017300361216/"
            />
          </Pad>

          <div style={{ marginTop: "1rem" }}>
            <Pad>
              <h3 className="text-heading3" style={{ marginBottom: "1rem" }}>
                Response Protocol
              </h3>
              <p
                style={{
                  color: "var(--colors-tertiary--500)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                All transmissions are monitored. Expect response within 24 hours. For urgent
                matters, use priority channel via LinkedIn.
              </p>
            </Pad>
          </div>
        </div>
      </div>

      {toast && (
        <CyberToast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};

export default Contact;
