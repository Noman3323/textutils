import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Added for proper navigation

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Color Theme Buttons */}
          <div className="d-flex">
            {["primary", "success", "danger", "warning"].map((color) => (
              <div
                key={color}
                className={`bg-${color} rounded mx-2`}
                onClick={() => props.changeColor(getComputedColor(color))}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  border: props.mode === "dark" ? "1px solid white" : "none",
                }}
                title={`${
                  color.charAt(0).toUpperCase() + color.slice(1)
                } Theme`}
                aria-label={`${color} theme`}
                role="button"
                tabIndex="0"
              ></div>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-3`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              checked={props.mode === "dark"}
              aria-checked={props.mode === "dark"}
              onChange={() => {}} // Empty handler to suppress React warning
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              {props.mode === "light" ? "Enable" : "Disable"} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper function for color values
function getComputedColor(colorType) {
  const colors = {
    primary: "#0d6efd",
    success: "#198754",
    danger: "#dc3545",
    warning: "#ffc107",
  };
  return colors[colorType] || "#0d6efd";
}

// PropTypes for validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
};

// Default props if not passed
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
