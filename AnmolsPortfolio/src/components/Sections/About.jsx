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
            Hi there, I'm Anmol! I'm currently majoring in{" "}
            <strong>Computer Information Systems</strong> with a strong focus on deepening my
            expertise in computing.
          </p>
          <p>
            My goal is to pursue a career in <strong>cyber/computer security</strong>, driven by a
            commitment to enhance digital safety and privacy in our interconnected world.
          </p>
        </div>
      </div>
    </Pad>
  );
};

export default About;
