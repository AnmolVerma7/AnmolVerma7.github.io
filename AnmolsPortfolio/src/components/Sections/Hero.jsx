import React, { useState, useEffect } from "react";
import { fetchGitHubActivity } from "../../utils/github";
import Button from "../UI/Button";
import Pad from "../UI/Pad";

/**
 * Component that renders text with a "hacked" decoding animation effect.
 *
 * @param {Object} props
 * @param {string} props.text - The final text to display
 * @param {string} [props.className] - CSS class for styling
 */
const HackedText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let animationInterval = null;
    let pauseTimeout = null;

    const animateForward = () => {
      // Phase 1: Erase Left -> Right (ANMOL -> ?????)
      let iteration = 0;
      clearInterval(animationInterval);

      animationInterval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index >= iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        iteration += 0.1;

        if (iteration >= text.length) {
          clearInterval(animationInterval);

          // Phase 2: Reveal Left -> Right (????? -> ANMOL)
          let iteration2 = 0;
          animationInterval = setInterval(() => {
            setDisplayText(
              text
                .split("")
                .map((char, index) => {
                  if (index < iteration2) {
                    return text[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("")
            );

            iteration2 += 0.1;

            if (iteration2 >= text.length) {
              clearInterval(animationInterval);
              setDisplayText(text);
              pauseTimeout = setTimeout(animateBackward, 7000);
            }
          }, 25);
        }
      }, 25);
    };

    const animateBackward = () => {
      // Phase 1: Erase Right -> Left (ANMOL -> ?????)
      let iteration = text.length;
      clearInterval(animationInterval);

      animationInterval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        iteration -= 0.1;

        if (iteration <= 0) {
          clearInterval(animationInterval);

          // Phase 2: Reveal Right -> Left (????? -> ANMOL)
          let iteration2 = text.length;
          animationInterval = setInterval(() => {
            setDisplayText(
              text
                .split("")
                .map((char, index) => {
                  if (index >= iteration2) {
                    return text[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("")
            );

            iteration2 -= 0.1;

            if (iteration2 <= 0) {
              clearInterval(animationInterval);
              setDisplayText(text);
              pauseTimeout = setTimeout(animateForward, 7000);
            }
          }, 25);
        }
      }, 25);
    };

    // Start with forward animation
    animateForward();

    return () => {
      clearInterval(animationInterval);
      clearTimeout(pauseTimeout);
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

/**
 * Hero section component.
 * Displays the main introduction, hacked text effect, and latest GitHub activity.
 *
 * @param {Object} props
 * @param {Function} props.setActiveSection - Function to update the active navigation section
 */
const Hero = ({ setActiveSection }) => {
  const [activities, setActivities] = useState([
    "→ Refactoring Portfolio",
    "→ Learning Rust",
    "→ Building AI Agents",
  ]);

  useEffect(() => {
    const loadActivity = async () => {
      const githubEvents = await fetchGitHubActivity("AnmolVerma7");
      if (githubEvents && githubEvents.length > 0) {
        setActivities(githubEvents);
      }
    };
    loadActivity();
  }, []);
  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-overline">
            <span className="segment-topbar__overline">SYSTEM_ID: ANMOL-V7 // STATUS: ONLINE</span>
          </div>

          <h1 className="hero-title">
            <HackedText text="ANMOL" className="highlight-text" />
          </h1>

          <div className="hero-cta">
            <Button size="xl" variant="primary" onClick={() => setActiveSection("projects")}>
              View Projects
            </Button>
            <Button
              size="xl"
              style={{ marginLeft: "1rem" }}
              onClick={() => setActiveSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="mini-activity-box">
            <Pad>
              <h3 className="text-heading3" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                Latest Activity
              </h3>
              <div className="activity-list">
                {activities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    {activity}
                  </div>
                ))}
              </div>
            </Pad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
