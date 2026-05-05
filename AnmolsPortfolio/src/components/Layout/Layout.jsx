import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
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
          color 0.3s ease;
        line-height: 1.4rem;
        cursor: pointer;
        color: var(--colors-primary--500);
        text-decoration: none;
      }
      .nav__link:hover {
        color: #ffffff;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
      }
      .nav__link--active {
        color: var(--colors-secondary--500);
        font-size: 1.25rem;
        transform: none;
        text-shadow: var(--ui-glow-text);
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

const MobileNavItem = ({ text, isActive, onClick, isLast = false }) => (
  <li style={{ marginBottom: isLast ? 0 : "1rem", listStyle: "none" }}>
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
        top: rect.bottom + 25, // 25px gap ensures it clears the Navbar Pad's border/notch
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

  // Render dropdown via portal to document.body (escapes Pad clipping!)
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: `${position.top}px`,
            right: `${position.right}px`,
            width: "250px",
            zIndex: 99999,
          }}
        >
          <Pad>
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
                isLast={true}
              />
            </ul>
          </Pad>
        </motion.div>
      )}
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
            <div className="app-header__anchor" style={{ display: 'flex', alignItems: 'center' }}>
              <span className="app-header__anchor__text">ANMOL://PORTFOLIO_V2.0</span>
              <img src="/LogoV1.png" alt="Logo" className="app-header__anchor__logo" />
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
            <div className="mobile-hamburger" ref={hamburgerRef}>
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
                color="#00e5ff"
                size={28}
                distance="sm"
                rounded
              />
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
          position: relative;
          z-index: 1;
        }
        main {
          position: relative;
          z-index: 1;
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
        .app-header__anchor__logo {
          display: none;
          height: 36px;
          object-fit: contain;
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
        @media (max-width: 425px) {
          .app-header__anchor__text {
            display: none;
          }
          .app-header__anchor__logo {
            display: block;
          }
        }


      `}</style>
    </div>
  );
};

export default Layout;
