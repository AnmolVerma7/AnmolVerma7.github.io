import React from "react";
import { motion } from "framer-motion";
import Pad from "../UI/Pad";
import Button from "../UI/Button";
import Badge from "../UI/Badge";

import unityGameImg from "../../assets/Images/UnityGame.gif";
import doubleAlgoImg from "../../assets/Images/DoubleAlgo.gif";
import avClothingImg from "../../assets/Images/AVClothing.gif";
import nutriAiImg from "../../assets/Images/NutriAI.jpg";

const PROJECTS = [
  {
    id: "nutri-ai",
    name: "NutriAI",
    description:
      "Intelligent, AI-powered nutrition tracking app with natural language logging and personalized meal planning. Features a Multi-Agent System for analyzing health goals.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "AI Agents", "Tailwind"],
    status: "Completed",
    year: "2025",
    repo: "https://github.com/AnmolVerma7/NutriAI",
    live: "https://nutriai-av.vercel.app/",
    image: nutriAiImg,
  },
  {
    id: "av-clothing",
    name: "AV Clothing",
    description:
      "Modern e-commerce clothing store with product browsing, cart functionality, and sales dashboard. Built with React 19 and Material-UI.",
    tech: ["React 19", "TypeScript", "Material-UI", "Vite"],
    status: "Completed",
    year: "2025",
    repo: "https://github.com/AnmolVerma7/AV-Clothing",
    live: "https://av-clothing.vercel.app/",
    image: avClothingImg,
  },
  {
    id: "unity-game",
    name: "Runner3D",
    description:
      '"A" and "D" a game made by me after learning C# while using the .NET framework in Unity. It features a few levels that were very fun to design.',
    tech: ["C#", ".NET", "Unity"],
    status: "Completed",
    year: "2023",
    repo: "https://github.com/AnmolVerma7/3DUnityGame",
    image: unityGameImg,
  },
  {
    id: "pathfinding",
    name: "Pathfinding Visualizer",
    description:
      "Showcases an implementation of 2 Pathfinding Algorithms using Pygame. Interactive grid for start/end points and obstacles.",
    tech: ["Python", "Pygame"],
    status: "Completed",
    year: "2023",
    repo: "https://github.com/AnmolVerma7/Pathfinding-Visualizer",
    image: doubleAlgoImg,
  },
];

const TechBadge = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "0.25rem 0.5rem",
      fontSize: "0.85rem",
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

/**
 * Card component for displaying individual project details.
 *
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {number} props.index - Index for staggered animation
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "tween", duration: 0.4, ease: "linear" }}
    >
      <Pad>
        <div className="card-header">
          <Badge status={project.status}>{project.status}</Badge>
          <span className="year">{project.year}</span>
        </div>

        <div className="project-image-container">
          <div className="glitch-image" style={{ backgroundImage: `url(${project.image})` }}></div>
        </div>

        <h3 className="text-heading3 project-title">{project.name}</h3>

        <div className="card-actions">
          {project.live && (
            <Button variant="secondary" onClick={() => window.open(project.live, "_blank")}>
              Live Demo
            </Button>
          )}
          <Button variant="primary" onClick={() => window.open(project.repo, "_blank")}>
            View Repository
          </Button>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="tech-stack">
          <div className="tech-label">TECH STACK:</div>
          <div className="tech-badges">
            {project.tech.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </Pad>
    </motion.div>
  );
};

/**
 * Projects section component.
 * Renders a grid of featured projects with details and links.
 */
const Projects = () => {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">FEATURED PROJECTS</h2>
        <div className="segment-topbar__overline">
          SELECT_PROJECT // VIEW_DETAILS // ANALYZE_CODE
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
