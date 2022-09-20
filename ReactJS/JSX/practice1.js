import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
let welcomeMessage = "";
let welcomeStyle = { color: "red" };

if (date.getHours() < 12) {
  welcomeMessage = "Good morning";
  welcomeStyle.color = "red";
} else if (date.getHours() < 18) {
  welcomeMessage = "Good afternoon";
  welcomeStyle.color = "green";
} else {
  welcomeMessage = "Good evening";
  welcomeStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={welcomeStyle}>
    {welcomeMessage}
  </h1>,
  document.getElementById("root")
);
