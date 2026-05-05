import React from "react";
import Pad from "../UI/Pad";
import Button from "../UI/Button";

/**
 * About section component.
 * Displays personal bio, objectives, and a link to the resume.
 */
const About = () => {
  return (
    <Pad>
      <div className="about-content">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="segment-topbar__overline">BIO_DATA // OBJECTIVES // BACKGROUND</div>

        <div className="bio-text">
          <p>
            I'm Anmol, a CIS student and developer who gravitates toward the <strong>visual</strong>{" "}
            and the <strong>interactive</strong>. Whether it's a <strong>web interface</strong>, a{" "}
            <strong>game</strong>, or something in between, I care about how it feels as much as how
            it works.
          </p>
          <p>
            Currently finishing my degree at <strong>MRU</strong> while building real projects in{" "}
            <strong>React</strong>, <strong>Unity</strong>, and whatever else the idea calls for.
          </p>
        </div>

        <div className="current-stack" style={{ marginTop: "1.5rem" }}>
          <div className="segment-topbar__overline" style={{ marginBottom: "0.8rem" }}>
            CURRENT_STACK:
          </div>
          <div className="tech-badge-container">
            {["React", "TypeScript", "PHP", "Bootstrap", "Unity", "C#", "Supabase", "AI APIs"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </Pad>
  );
};

export default About;
