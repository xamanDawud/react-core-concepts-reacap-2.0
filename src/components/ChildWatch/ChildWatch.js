import React from "react";
import Childs_Childs from "../Childs_Childs/Childs_Childs";

const ChildWatch = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>This is Child Components</h1>
      <p>{props.stepss}</p>
      <Childs_Childs steps={props.stepss}></Childs_Childs>
    </div>
  );
};

export default ChildWatch;
