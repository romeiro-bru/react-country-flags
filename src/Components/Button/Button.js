import React from "react";
import { useState } from "react";
import { Flag } from "../Flag/Flag";

import "./style.css";

export function Button() {
  const oldVariable = "Show some country flags";
  const newVariable = "Flags are boring";

  const [message, SetMessage] = useState(oldVariable);
  const handleClick = () => {
    message === oldVariable ? SetMessage(newVariable) : SetMessage(oldVariable);
  };

  return (
    <div>
      <button onClick={handleClick}>{message}</button>
      <Flag hide={message === oldVariable} />
    </div>
  );
}
