import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [bgColor, setBgColor] = useState("white");
  const [buttonColor, setButtonColor] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const isDarkMode = mode === "light";
    setMode(isDarkMode ? "dark" : "light");
    const newBgColor = isDarkMode ? "#343a40" : "white";
    setBgColor(newBgColor);
    document.body.style.backgroundColor = newBgColor;
    document.body.style.color = isDarkMode ? "white" : "black";
    showAlert(
      `${isDarkMode ? "Dark" : "Light"} mode has been enabled`,
      "success"
    );
    document.title = `TextUtils ${isDarkMode ? "Dark" : "Light"} Mode`;
  };

  const changeColor = (color) => {
    setMode("light");
    setBgColor(color);
    document.body.style.backgroundColor = color;
    document.body.style.color = "black";

    const colorMap = {
      "#0d6efd": "primary",
      "#198754": "success",
      "#dc3545": "danger",
      "#ffc107": "warning",
    };
    setButtonColor(colorMap[color] || "primary");
    showAlert("Color mode has been enabled", "success");
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <div
        className="container my-3"
        style={{
          backgroundColor: bgColor,
          color: mode === "dark" ? "white" : "black",
          borderRadius: "10px",
          padding: "20px",
          minHeight: "80vh",
        }}
      >
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          {/* Corrected Route definition */}
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to analyze below"
                mode={mode}
                buttonColor={buttonColor}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
