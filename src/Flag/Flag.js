import React from "react";
import "./style.css";

import china from "./china.svg";
import india from "./india.svg";
import aust from "./australia.svg";
import brazil from "./brazil.svg";
import germany from "./germany.svg";
import france from "./france.svg";

export function Flag({ hide }) {
  return (
    <section hidden={hide} className="flags">
      <img src={china} alt="china" />
      <img src={india} alt="india" />
      <img src={aust} alt="australia" />
      <img src={brazil} alt="brazil" />
      <img src={germany} alt="germany" />
      <img src={france} alt="france" />
    </section>
  );
}
