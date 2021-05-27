import React from "react";
import { useState } from "react";
import "./style.css";
import india from "./india.svg";
import brazil from "./brazil.svg";
import aus from "./australia.svg";
import china from "./china.svg";
import france from "./france.svg";
import germany from "./germany.svg";

export function Button() {
  const [message, SetMessage] = useState("Show some country flags");
  const handleClick = () => {
    message === "Show some country flags"
      ? SetMessage("Flags are boring")
      : SetMessage("Show some country flags");
  };
  const flags = (
    <section hidden={message === "Show some country flags"} className="flags">
      <img src={china} alt="china" />
      <img src={brazil} alt="brazil" />
      <img src={france} alt="france" />
      <img src={aus} alt="aus" />
      <img src={india} alt="india" />
      <img src={germany} alt="germany" />
    </section>
  );
  return (
    <div>
      <button onClick={handleClick}>{message}</button>
      {flags}
    </div>
  );
}
