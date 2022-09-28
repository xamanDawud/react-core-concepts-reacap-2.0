import React from "react";

const DisplayCosmetics = (props) => {
  const { name, price } = props.cosmetic;
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "gray",
        color: "white",
      }}
    >
      <h1>Name:{name}</h1>
      <p>Price:{price}</p>
    </div>
  );
};

export default DisplayCosmetics;
