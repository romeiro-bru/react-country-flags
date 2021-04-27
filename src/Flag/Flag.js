import React from "react";
import china from "../Button/china.svg";
import india from "../Button/india.svg";
import aust from "../Button/australia.svg";
import brazil from "../Button/brazil.svg";
import germany from "../Button/germany.svg";
import france from "../Button/france.svg";

export function Flag(props) {
  return (
    <section hidden={props.hide} className="flags">
      <img src={china} alt="china" />
      <img src={india} alt="india" />
      <img src={aust} alt="australia" />
      <img src={brazil} alt="brazil" />
      <img src={germany} alt="germany" />
      <img src={france} alt="france" />
    </section>
  );
}
