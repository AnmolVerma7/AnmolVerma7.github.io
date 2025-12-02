import React, { useState } from "react";
import "./styles/theme.css";
import "./styles/sections.css";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <div className="about-skills-grid">
              <About />
              <Skills />
            </div>
          </>
        );
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}

export default App;
