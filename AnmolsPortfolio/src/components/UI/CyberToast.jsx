import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cyberpunk-styled toast notification component.
 * @param {Object} props
 * @param {string} props.message - The message to display
 * @param {"success" | "error" | "warning"} props.type - The type of toast (controls color/icon)
 * @param {number} props.duration - How long to show the toast in ms (default 5000)
 * @param {Function} props.onClose - Callback when toast is dismissed
 */
const CyberToast = ({ message, type = "success", duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close effect
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  // Handle animation exit completion
  const handleExitComplete = () => {
    if (!isVisible && onClose) {
      onClose();
    }
  };

  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          color: "#00E5FF",
          border: "2px solid #00E5FF",
          boxShadow: "0 0 10px rgba(0, 229, 255, 0.5), inset 0 0 10px rgba(0, 229, 255, 0.2)",
          title: "TRANSMISSION_SUCCESS",
        };
      case "error":
        return {
          color: "#FF003C",
          border: "2px solid #FF003C",
          boxShadow: "0 0 10px rgba(255, 0, 60, 0.5), inset 0 0 10px rgba(255, 0, 60, 0.2)",
          title: "TRANSMISSION_FAILED",
        };
      case "warning":
        return {
          color: "#FBFF00",
          border: "2px solid #FBFF00",
          boxShadow: "0 0 10px rgba(251, 255, 0, 0.5), inset 0 0 10px rgba(251, 255, 0, 0.2)",
          title: "PROTOCOL_WARNING",
        };
      default:
        return {
          color: "#00E5FF",
          border: "2px solid #00E5FF",
          boxShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
          title: "SYSTEM_NOTIFICATION",
        };
    }
  };

  const styles = getStyles();

  return ReactDOM.createPortal(
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 999999,
            background: "#050505", // --colors-bg--300
            padding: "1rem 1.5rem",
            minWidth: "300px",
            maxWidth: "90vw",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
            borderLeft: styles.border,
            borderBottom: styles.border,
          }}
        >
          {/* Top Notch Decor */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: styles.color,
              boxShadow: styles.boxShadow,
            }}
          />
          {/* Right Border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "2px",
              height: "calc(100% - 14px)",
              background: styles.color,
              boxShadow: styles.boxShadow,
            }}
          />
          {/* Bottom Right Notch Diag */}
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              right: "-6px",
              width: "21.21px",
              height: "2px",
              background: styles.color,
              transform: "rotate(-45deg)",
              boxShadow: styles.boxShadow,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h4
              style={{
                margin: "0 0 0.5rem 0",
                color: styles.color,
                fontFamily: "var(--fonts-secondary), monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textShadow: `0 0 5px ${styles.color}`,
              }}
            >
              System::{styles.title}
            </h4>
            <p
              style={{
                margin: 0,
                color: "var(--colors-on_bg--500)",
                fontFamily: "var(--fonts-primary), sans-serif",
                fontSize: "1rem",
                lineHeight: "1.4",
              }}
            >
              {message}
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              background: "transparent",
              border: "none",
              color: "var(--colors-tertiary--500)",
              cursor: "pointer",
              fontSize: "1rem",
              zIndex: 2,
            }}
            aria-label="Close notification"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CyberToast;
