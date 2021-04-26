import React from "react";
import { useState } from "react";
import "./style.css";

import india from "./india.svg";
import aust from "./australia.svg";
import brazil from "./brazil.svg";

export function Button() {
  const [message, SetMessage] = useState("Show some country flags");
  const handleClick = () => {
    message === "Show some country flags"
      ? SetMessage("Flags are boring")
      : SetMessage("Show some country flags");
  };

  const flags = (
    <section hidden={message === "Show some country flags"} className="flags">
      <img src={india} alt="india" />
      <img src={aust} alt="australia" />
      <img src={brazil} alt="brazil" />
    </section>
  );

  return (
    <div>
      <button onClick={handleClick}>{message}</button>
      {flags}
    </div>
  );
}
