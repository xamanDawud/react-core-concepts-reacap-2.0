import React from "react";
import { useState } from "react";
import Childs_Childs from "../Childs_Childs/Childs_Childs";
import ChildWatch from "../ChildWatch/ChildWatch";

const ParentWatch = () => {
  const [count, setCount] = useState(20);
  let increase = () => {
    setCount = setCount + 10;
  };
  return (
    <div style={{ border: "2px solid purple", padding: "20px" }}>
      <h1>This is Parent Compnent</h1>
      <p>Right Now Time is {count}</p>
      <button onClick={increase}>Click Here</button>
      <ChildWatch steps={count}></ChildWatch>
    </div>
  );
};

export default ParentWatch;
