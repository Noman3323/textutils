import React, { useState } from "react"; // useState is already imported here

export default function About() {
  const [myStyle, setMyStyle] = useState({
    // Error on this line (Line 4)
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode"); // Error on this line (Line 9)

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid gray",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  // Style for the accordion button to ensure arrow visibility
  const accordionButtonStyle = {
    ...myStyle,
    "--bs-accordion-btn-color": myStyle.color,
    "--bs-accordion-btn-bg": myStyle.backgroundColor,
    "--bs-accordion-active-color": myStyle.color,
    "--bs-accordion-active-bg": myStyle.backgroundColor,
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={accordionButtonStyle} // Apply the adjusted style
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a modern, responsive web application built with
              React.js that allows users to easily manipulate and format text.
              It offers features such as converting text to uppercase or
              lowercase, removing extra spaces, copying text to clipboard, and
              checking vowel-starting words. Users can also switch between
              light, dark, and multiple colorful themes, providing a
              customizable and user-friendly experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle} // Apply the adjusted style
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>
                Text Transformation Tools ➔ Convert text to uppercase,
                lowercase, remove extra spaces, and more in one click. Copy &
                Clean Text ➔ Easily copy the modified text and remove unwanted
                spaces instantly. Real-Time Word and Character Counter ➔ Get
                live feedback on the number of words, characters, and estimated
                reading time. Multiple Theme Support ➔ Choose between Light
                Mode, Dark Mode, Blue, Green, Red, and Yellow color themes for
                better visibility and personalization. Fast and Responsive
                Design ➔ Built with Bootstrap 5 and React.js for a smooth and
                responsive experience across all devices.
              </code>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle} // Apply the adjusted style
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Frontend Framework: React.js CSS Framework: Bootstrap 5 Custom
              Styling: Dynamic styling with inline CSS and conditional classes
              JavaScript Features: useState Hook for dynamic state management
              setTimeout for auto-hiding alerts Event handling for button clicks
              and form changes Deployment Ready: Can be easily hosted on
              platforms like Vercel, Netlify, or GitHub Pages.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3" style={myStyle}>
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
          style={{
            marginTop: "20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
