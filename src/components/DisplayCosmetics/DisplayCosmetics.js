import React from "react";
import { storage } from "../Cosmetics/FakeStorage/FakeStorage";

const DisplayCosmetics = (props) => {
  const { id, name, price } = props.cosmetic;
  let getItem = (id, name) => {
    console.log(`Id is ${id} and name is ${name}`);
    storage(id);
  };
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
      <button
        onClick={() => {
          getItem(id, name);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DisplayCosmetics;
