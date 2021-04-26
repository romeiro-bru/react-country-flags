import React from "react";
import { useState } from "react";
import "./style.css";

import china from "./china.svg";
import india from "./india.svg";
import aust from "./australia.svg";
import brazil from "./brazil.svg";
import germany from "./germany.svg";
import france from "./france.svg";

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
      <img src={india} alt="india" />
      <img src={aust} alt="australia" />
      <img src={brazil} alt="brazil" />
      <img src={germany} alt="germany" />
      <img src={france} alt="france" />
    </section>
  );

  return (
    <div>
      <button onClick={handleClick}>{message}</button>
      {flags}
    </div>
  );
}
