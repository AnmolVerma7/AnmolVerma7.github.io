import React from "react";
import Pad from "../UI/Pad";
import Button from "../UI/Button";
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

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <div className="form-control">
                  <input id="name" type="text" placeholder="Enter your name..." />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="form-control">
                  <input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <div className="form-control">
                  <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                </div>
              </div>

              <Button size="xl" variant="primary" type="submit">
                Transmit Message
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
    </div>
  );
};

export default Contact;
