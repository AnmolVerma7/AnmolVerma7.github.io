import React from "react";
import Pad from "../UI/Pad";

const SKILLS = {
  languages: ["C#", "Python", "JavaScript", "SQL", "HTML/CSS"],
  frameworks: [".NET", "React", "Unity", "Pygame"],
  tools: ["Git", "VS Code", "Visual Studio", "Agility PIM"],
};

const TechBadge = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "0.4rem 0.8rem",
      fontSize: "0.9rem",
      border: "1px solid var(--colors-primary--600)",
      borderRadius: "2px",
      color: "var(--colors-primary--500)",
      backgroundColor: "var(--colors-bg--300)",
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
    }}
  >
    {children}
  </span>
);

const SkillCategory = ({ title, items }) => (
  <div className="skill-category">
    <h3 className="text-heading3" style={{ marginBottom: "0.75rem" }}>
      {title}
    </h3>
    <div className="skill-items">
      {items.map((item) => (
        <TechBadge key={item}>{item}</TechBadge>
      ))}
    </div>
  </div>
);

/**
 * Skills section component.
 * Displays a matrix of technical skills categorized by type.
 */
const Skills = () => {
  return (
    <Pad>
      <div className="skills-content">
        <h2 className="section-title">SKILL MATRIX</h2>
        <div className="segment-topbar__overline">CORE_COMPETENCIES</div>

        <div style={{ marginTop: "1.5rem" }}>
          <SkillCategory title="Languages" items={SKILLS.languages} />
          <SkillCategory title="Frameworks" items={SKILLS.frameworks} />
          <SkillCategory title="Tools" items={SKILLS.tools} />
        </div>
      </div>
    </Pad>
  );
};

export default Skills;
