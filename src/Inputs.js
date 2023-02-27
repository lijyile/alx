import React from "react";
import { useState } from "react";
function Inputs() {
  const [change, setChange] = useState("");
  const [inputt, setInputt] = useState("");
  const [submitted, setSubitted] = useState(false);
  function handleClick() {
    setSubitted(true);
    console.log(inputt);
    setChange("");
  }
  return <div>Inputs</div>;
}

export default Inputs;
