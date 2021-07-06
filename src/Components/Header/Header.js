import React from "react";
import atom from "./atom.svg";
import "./style.css";

export function Header() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="react" className="spin" />
      </h1>
      <h2>Day 4</h2>
    </>
  );
}
