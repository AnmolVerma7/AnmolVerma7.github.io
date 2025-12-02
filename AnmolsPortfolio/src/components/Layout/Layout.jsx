import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import MatrixBackground from "../UI/MatrixBackground";
import Pad from "../UI/Pad";

const NavItem = ({ text, isActive, onClick, notificationCount = 0 }) => (
  <li className="nav__item">
    <a
      className={`nav__link ${isActive ? "nav__link--active" : ""}`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <span className="nav__link__element">{text}</span>
      {notificationCount > 0 && (
        <span className="nav__link__element">
          <span className="badge-mini">{notificationCount}</span>
        </span>
      )}
    </a>
    <style jsx>{`
      .nav__item {
        display: inline-block;
      }
      .nav__item + .nav__item {
        margin-left: 3rem;
      }
      .nav__link {
        align-items: baseline;
        display: flex;
        text-shadow: var(--ui-glow-text);
        text-transform: uppercase;
        transition:
          transform 0.25s,
          color 0.3s ease; /* Combined transitions */
        line-height: 1.4rem;
        cursor: pointer;
        color: var(--colors-primary--500); /* Changed color */
        text-decoration: none; /* Added */
      }
      .nav__link:hover {
        color: #ffffff; /* Changed color */
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Added text-shadow */
      }
      .nav__link--active {
        color: var(--colors-secondary--500);
        font-size: 1.25rem;
        transform: none;
        text-shadow: var(--ui-glow-text); /* Added text-shadow */
      }
      .badge-mini {
        border: 1px solid var(--colors-tertiary--500);
        border-radius: 3px;
        color: var(--colors-tertiary--500);
        font-size: 0.75rem;
        padding: 0 0.25rem;
        margin-left: 0.5rem;
      }
    `}</style>
  </li>
);

const MobileNavItem = ({ text, isActive, onClick }) => (
  <li style={{ marginBottom: "1rem", listStyle: "none" }}>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={{
        display: "block",
        fontSize: isActive ? "1.25rem" : "1.1rem",
        color: isActive ? "#ff003c" : "#00e5ff",
        textTransform: "uppercase",
        fontFamily: "VT323, monospace",
        letterSpacing: "0.1em",
        textShadow: isActive ? "0 0 10px #ff003c" : "0 0 10px #00e5ff",
        transition: "all 0.3s",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      → {text}
    </a>
  </li>
);

const MobileNav = ({ isOpen, setIsOpen, activeSection, setActiveSection, buttonRef }) => {
  const [position, setPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 5, // 5px gap below button
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen, buttonRef]);

  // Close dropdown when user scrolls (standard mobile behavior)
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  // Render dropdown via portal to document.body (escapes Pad clipping!)
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: `${position.top}px`,
          right: `${position.right}px`,
          width: "250px",
          background: "#050505",
          border: "2px solid #00b8cc",
          zIndex: 99999,
          overflow: "hidden",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%)",
        }}
      >
        <div style={{ padding: "1.5rem 1rem" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <MobileNavItem
              text="HOME"
              isActive={activeSection === "home"}
              onClick={() => handleNavClick("home")}
            />
            <MobileNavItem
              text="PROJECTS"
              isActive={activeSection === "projects"}
              onClick={() => handleNavClick("projects")}
            />
            <MobileNavItem
              text="EXPERIENCE"
              isActive={activeSection === "experience"}
              onClick={() => handleNavClick("experience")}
            />
            <MobileNavItem
              text="CONTACT"
              isActive={activeSection === "contact"}
              onClick={() => handleNavClick("contact")}
            />
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body // Portal renders at document root!
  );
};

const Layout = ({ children, activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  return (
    <div className="app-skeleton">
      <MatrixBackground />

      <header className="app-header">
        <Pad>
          <div className="header-content">
            <div className="app-header__anchor">
              <span className="app-header__anchor__text">ANMOL://PORTFOLIO_V2.0</span>
            </div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <ul className="nav">
                <NavItem
                  text="Home"
                  isActive={activeSection === "home"}
                  onClick={() => setActiveSection("home")}
                />
                <NavItem
                  text="Projects"
                  isActive={activeSection === "projects"}
                  onClick={() => setActiveSection("projects")}
                />
                <NavItem
                  text="Experience"
                  isActive={activeSection === "experience"}
                  onClick={() => setActiveSection("experience")}
                />
                <NavItem
                  text="Contact"
                  isActive={activeSection === "contact"}
                  onClick={() => setActiveSection("contact")}
                />
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="mobile-hamburger">
              <button
                ref={hamburgerRef}
                className="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </Pad>
      </header>

      <main>{children}</main>

      {/* Mobile Dropdown - Rendered via Portal */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        buttonRef={hamburgerRef}
      />

      <style jsx>{`
        .app-skeleton {
          padding: 0 2rem;
          min-height: 100vh;
          max-width: 1600px;
          margin: 0 auto;
        }
        .app-header {
          margin: 1rem 0 2rem 0;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .app-header__anchor__text {
          font-family: var(--fonts-secondary);
          font-size: 1.5rem;
          letter-spacing: 0.035rem;
          text-shadow: var(--ui-glow-text);
          text-transform: uppercase;
          color: var(--colors-secondary--500);
        }
        .nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: flex-end;
        }
        .desktop-nav {
          display: block;
        }
        .mobile-hamburger {
          display: none;
          position: relative;
          overflow: visible;
          z-index: 10000;
        }
        @media (max-width: 768px) {
          .app-skeleton {
            padding: 0 1rem;
          }
          .desktop-nav {
            display: none;
          }
          .mobile-hamburger {
            display: block;
          }
          .header-content {
            flex-direction: row;
          }
        }

        /* Mobile Drawer Styles */
        :global(.backdrop) {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          backdrop-filter: blur(2px);
        }
        :global(.drawer) {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 300px;
          height: 100%;
          background: var(--colors-bg--300);
          border-left: 2px solid var(--colors-primary--600);
          z-index: 10000;
          box-shadow: -5px 0 20px rgba(0, 229, 255, 0.2);
          display: flex;
          flex-direction: column;
        }
        :global(.drawer-content) {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          background: #000;
        }
        :global(.drawer-header) {
          border-bottom: 1px solid var(--colors-primary--600);
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }
        :global(.drawer-title) {
          color: var(--colors-secondary--500);
          font-family: var(--fonts-secondary);
          letter-spacing: 0.1em;
        }
        :global(.mobile-nav-list) {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        :global(.drawer-footer) {
          border-top: 1px solid var(--colors-primary--600);
          padding-top: 1rem;
          margin-top: auto;
        }
        :global(.status-indicator) {
          display: flex;
          align-items: center;
          color: var(--colors-tertiary--500);
          font-size: 0.8rem;
          font-family: var(--fonts-secondary);
        }
        :global(.status-dot) {
          width: 8px;
          height: 8px;
          background-color: #00ff00;
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 5px #00ff00;
        }
        .hamburger-btn {
          background: transparent;
          border: 1px solid var(--colors-primary--600);
          color: var(--colors-primary--500);
          padding: 0.5rem;
          cursor: pointer;
          clip-path: var(--ui-notch-path);
        }
      `}</style>
    </div>
  );
};

export default Layout;
