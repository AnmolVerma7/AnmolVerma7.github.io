import React from "react";
import Pad from "../UI/Pad";

import ahsLogo from "../../assets/Images/AHSLogo.png";
import whiteCapLogo from "../../assets/Images/WhiteCapLogo.png";

const EXPERIENCE = [
  {
    id: "ahs",
    role: "IT Work Experience Student",
    company: "Alberta Health Services",
    logo: ahsLogo,
    description:
      "Participated in a Technical Dress Rehearsal, conducting tests, configurations, and troubleshooting across a variety of non-medical devices and workstations. Contributed to technical documentation and streamlined support processes by generating IT tickets.",
  },
  {
    id: "whitecap",
    role: "Data Management Intern",
    company: "White Cap Canada",
    logo: whiteCapLogo,
    description:
      "Responsible for enriching product data for over 1,000 items using the Agility Product Information Management (PIM) system. Maintained web content using HTML templates and programmed a Visual Basic function that improved efficiency by 95%.",
  },
];

const ExperienceCard = ({ exp }) => (
  <div className="experience-card">
    <Pad>
      <div className="exp-header">
        {/* Placeholder for logo if not found */}
        <div className="logo-container">
          {/* Using text fallback if image fails, but trying image first */}
          <img
            src={exp.logo}
            alt={exp.company}
            className="company-logo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <div className="logo-fallback" style={{ display: "none" }}>
            {exp.company[0]}
          </div>
        </div>
        <div className="exp-title">
          <h3 className="role">{exp.role}</h3>
          <h4 className="company">{exp.company}</h4>
        </div>
      </div>
      <div className="exp-body">
        <p>{exp.description}</p>
      </div>
    </Pad>
  </div>
);

/**
 * Experience section component.
 * Renders a list of professional experience cards.
 */
const Experience = () => {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">EXPERIENCE LOG</h2>
        <div className="segment-topbar__overline">
          CAREER_HISTORY // DEPLOYMENTS // ACHIEVEMENTS
        </div>
      </div>

      <div className="experience-list">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
