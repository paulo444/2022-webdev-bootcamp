import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

let [honda, tesla] = cars;

let {
  speedStats: teslaSpeedStats,
  coloursByPopularity: teslaTopColours
} = tesla;
let { topSpeed: teslaTopSpeed } = teslaSpeedStats;
let [teslaTopColour] = teslaTopColours;

let {
  speedStats: hondaSpeedStats,
  coloursByPopularity: hondaTopColours
} = honda;
let [hondaTopColour] = hondaTopColours;
let { topSpeed: hondaTopSpeed } = hondaSpeedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
