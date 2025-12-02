import React from "react";
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
        transition: transform 0.25s;
        line-height: 1.4rem;
        cursor: pointer;
        color: var(--colors-on_bg--500);
      }
      .nav__link:hover {
        color: var(--colors-primary--200);
      }
      .nav__link--active {
        color: var(--colors-secondary--500);
        font-size: 1.25rem;
        transform: none;
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

const Layout = ({ children, activeSection, setActiveSection }) => {
  return (
    <div className="app-skeleton">
      <MatrixBackground />
      <header className="app-header">
        <Pad>
          <div className="header-content">
            <div className="app-header__anchor">
              <span className="app-header__anchor__text">ANMOL://PORTFOLIO_V2.0</span>
            </div>
            <nav>
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
          </div>
        </Pad>
      </header>

      <main>{children}</main>

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
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          .nav {
            flex-wrap: wrap;
            justify-content: center;
          }
          .nav__item + .nav__item {
            margin-left: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
