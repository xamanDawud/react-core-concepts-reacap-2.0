import React from "react";

const DisplayData = (props) => {
  let shoppingCart = {};
  const { _id, name, phone } = props.data;
  let clickToInfo = (id) => {
    //Set Add to Cart
    let storeCart = localStorage.getItem("Shopping-cart");
    if (storeCart) {
      shoppingCart = JSON.parse(storeCart);
    }

    //Add quantity item
    let quantity = shoppingCart[id];
    if (quantity) {
      let newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));
  };

  let removeData = (id) => {
    let storeCart = localStorage.getItem("Shopping-cart");
    if (storeCart) {
      shoppingCart = JSON.parse(storeCart);
      if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));
      }
    }
  };
  return (
    <div>
      <h1>Nmae is :{name}</h1>
      <p>{_id}</p>
      <p>Phone: {phone}</p>
      <button
        onClick={() => {
          clickToInfo(_id);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          removeData(_id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default DisplayData;
