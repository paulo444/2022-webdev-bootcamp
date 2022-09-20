import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState({ backgroundColor: "white" });
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  function ChangeBackground() {
    if (bgColor.backgroundColor === "white") {
      setBgColor({ backgroundColor: "black" });
    } else {
      setBgColor({ backgroundColor: "white" });
    }
  }

  function getNameChange(event) {
    setName(event.target.value);
  }

  function submitName() {
    setFullName(name);
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={getNameChange}
      />
      <button
        style={bgColor}
        onMouseOver={ChangeBackground}
        onMouseOut={ChangeBackground}
        onClick={submitName}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
