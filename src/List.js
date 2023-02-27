import React from "react";
import { useState } from "react";
function List({ props, submitted }) {
  const [mess, setMess] = useState("");

  return <div>{mess}</div>;
}

export default List;
