import React from "react";

const Childs_Childs = (props) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>This is Chids Childs Component</h1>
      <p>{props.steps}</p>
    </div>
  );
};

export default Childs_Childs;
