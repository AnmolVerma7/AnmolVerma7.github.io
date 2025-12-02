import React from "react";

/**
 * Status badge component for displaying tags or states.
 * Automatically colors based on the status prop.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge label
 * @param {string} [props.status='default'] - Status key for coloring ('Production', 'Active Dev', 'active')
 */
const Badge = ({ children, status = "default" }) => {
  const getColor = () => {
    switch (status) {
      case "Production":
        return "var(--colors-active--500)";
      case "Active Dev":
        return "var(--colors-secondary--500)";
      case "active":
        return "var(--colors-active--500)";
      default:
        return "var(--colors-tertiary--500)";
    }
  };

  const color = getColor();

  return (
    <span className="badge" style={{ borderColor: color, color: color }}>
      {children}
      <style jsx>{`
        .badge {
          border: 1.5px solid;
          border-radius: 3px;
          display: inline-block;
          font-size: 0.92rem;
          font-weight: normal;
          line-height: 1;
          padding: 0.15em 0.34em;
          vertical-align: middle;
          text-transform: uppercase;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </span>
  );
};

export default Badge;
