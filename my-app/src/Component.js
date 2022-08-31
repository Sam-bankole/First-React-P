import React from "react";
import "./Component.css";
import logol from "./logo.svg";
export default function Component() {
  return (
    <div className="components">
      <h1>Fun Fact about React</h1>
      <ul>
        <li>Was first released 2013</li>
        <li>Was originally created by jordan walke</li>
        <li>Has well over 100k on GitHub</li>
        <li>Is maintained by FaceBook</li>
        <li>Powers thousands of enterprises app, including mobile apps</li>
      </ul>
      <img src={logol} alt="" className="logol" />
    </div>
  );
}
