import React from "react";
import ReactDOM from "react-dom";

const power = 1000;

const date = new Date();

ReactDOM.render(
  <div>
    <h1>JSX</h1>
    <ul>
      <li>anu</li>
      <li>don</li>
      <li>tri</li>
    </ul>

    <p>Vales {power + Math.floor(Math.random() * (10 - 6) + 6)}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
