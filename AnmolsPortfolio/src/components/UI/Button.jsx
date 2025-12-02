import React from "react";
import "../../styles/index.css"; // Ensure styles are loaded

/**
 * Reusable Button component with Cyberpunk styling.
 * Supports different sizes and variants.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'default'|'lg'|'xl'} [props.size='default'] - Size of the button
 * @param {'default'|'primary'} [props.variant='default'] - Style variant
 * @param {Object} [props.style] - Inline styles
 * @param {Function} [props.onClick] - Click handler
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 */
const Button = ({
  children,
  size = "default",
  variant = "default",
  style = {},
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant ? `button--${variant}` : ""} ${
        size ? `button--size-${size}` : ""
      }`}
      style={style}
    >
      <span className="button__content">{children}</span>
      <style jsx>{`
        .button {
          background-color: transparent;
          border: 1px solid var(--colors-primary--500);
          border-radius: 2px;
          cursor: pointer;
          color: var(--colors-primary--500);
          display: inline-block;
          font-family: var(--fonts-primary);
          letter-spacing: 0.045em;
          padding: 0.45rem;
          text-align: left;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .button:hover {
          background-color: var(--colors-primary--800);
          color: var(--colors-on_primary--500);
          box-shadow: 0 0 10px var(--colors-primary--600);
        }

        .button__content {
          display: inline-block;
          z-index: 2;
        }

        .button--size-lg,
        .button--size-xl {
          border-width: 2px;
          clip-path: var(--ui-notch-path);
          padding: 0.55rem 0.7rem 0.7rem 0.55rem;
        }

        .button--size-lg::before,
        .button--size-xl::before {
          background-color: currentcolor;
          bottom: 5px;
          content: "";
          display: block;
          height: 3px;
          position: absolute;
          right: -6px;
          top: auto;
          transform: rotate(-45deg);
          width: var(--ui-notch-hypotenuse);
          z-index: 100;
        }

        .button--size-xl {
          padding: 0.55rem 1.5rem 1.5rem 0.55rem;
        }

        .button--primary {
          color: var(--colors-secondary--500);
          border-color: var(--colors-secondary--500);
        }

        .button--primary:hover {
          background-color: var(--colors-secondary--900);
          color: var(--colors-secondary--500);
          box-shadow: 0 0 15px var(--colors-secondary--500);
        }
      `}</style>
    </button>
  );
};

export default Button;
