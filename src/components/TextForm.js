import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    // console.log("" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleVowelClick = () => {
    const vowelSoundExceptions = [
      "hour",
      "honest",
      "honor",
      "heir",
      "herb", // add more if needed
    ];

    const words = text.split(/\s+/);

    const vowelWords = words.filter((word) => {
      const lowerWord = word.toLowerCase();
      return (
        /^[aeiou]/.test(lowerWord) || vowelSoundExceptions.includes(lowerWord)
      );
    });

    setText(vowelWords.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    // console.log("I am copy");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const [text, setText] = useState("");
  // Text= ("new text"); wrong way to change the state
  // setText("new text"); Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid",
              borderColor: props.mode === "dark" ? "#ccc" : "#ced4da",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleVowelClick}
        >
          Check Vowel
        </button>

        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          className={`btn btn-${props.buttonColor} mx-2`}
          style={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          words and {text.replace(/\s/g, "").length} characters
          {/* {text.split("").length}words and {text.length} characters */}
        </p>
        {(
          0.008 *
          text
            .trim()
            .split(/\s+/)
            .filter((word) => word.length > 0).length
        ).toFixed(2)}{" "}
        Minutes read
        {/* <p>{0.008 * text.split("").length}Minutes read</p> */}
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
