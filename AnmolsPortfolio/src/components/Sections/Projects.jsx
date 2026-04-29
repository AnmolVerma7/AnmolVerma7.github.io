import React from "react";
import { motion } from "framer-motion";
import Pad from "../UI/Pad";
import Button from "../UI/Button";
import Badge from "../UI/Badge";

import nutriAiImg from "../../assets/Images/NutriAI.jpg";

const PROJECTS = [
  {
    id: "voidrun",
    name: "VoidRun",
    description:
      "First-person movement-based survival game where players must outrun a health-draining void to reach the end. A focused fork from a larger title ('Cardini') designed specifically to refine complex movement systems and test mechanics within a high-pressure loop.",
    tech: ["Unity", "C#", "Kinematic Character Controller", "Cinemachine"],
    status: "Active Dev",
    year: "2026",
    live: "https://anmolv.com/VoidRun/",
    video: "/Videos/VRDemo.mp4",
  },
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
    video: "/Videos/AvClothing.mp4",
  },

  {
    id: "pathfinding",
    name: "Pathfinding Visualizer",
    description:
      "Showcases an interactive implementation of Pathfinding Algorithms right in the browser. Features a dynamic grid for plotting start/end points and obstacles.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    status: "Completed",
    year: "2023",
    repo: "https://github.com/AnmolVerma7/PathfindingWeb",
    live: "https://anmolv.com/PathfindingWeb/",
    video: "/Videos/PathfindingDemo.mp4",
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
          {project.video ? (
            <video src={project.video} autoPlay loop muted playsInline className="project-video" />
          ) : (
            <div
              className="glitch-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
          )}
        </div>

        <h3 className="text-heading3 project-title">{project.name}</h3>

        <div className="card-actions">
          {project.live && (
            <Button variant="secondary" onClick={() => window.open(project.live, "_blank")}>
              Live Demo
            </Button>
          )}
          {project.repo && (
            <Button variant="primary" onClick={() => window.open(project.repo, "_blank")}>
              View Repository
            </Button>
          )}
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
