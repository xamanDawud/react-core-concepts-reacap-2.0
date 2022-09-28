import React from "react";
import DisplayCosmetics from "../DisplayCosmetics/DisplayCosmetics";

const Cosmetics = () => {
  let cosmetics = [
    { id: 1, name: "Book 1", price: 2000 },
    { id: 2, name: "Book 2", price: 5000 },
    { id: 3, name: "Book 3", price: 6000 },
    { id: 4, name: "Book 4", price: 7000 },
    { id: 5, name: "Book 5", price: 4000 },
    { id: 6, name: "Book 6", price: 7000 },
  ];
  return (
    <div>
      {cosmetics.map((cosmetic) => (
        <DisplayCosmetics cosmetic={cosmetic}></DisplayCosmetics>
      ))}
    </div>
  );
};

export default Cosmetics;
