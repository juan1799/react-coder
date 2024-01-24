import React from "react";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <>
      <div>
        <img src="./img/cart-icon.svg" alt="" className="cart-icon" />
        <p>0</p>
      </div>
    </>
  );
};

export default CartWidget;
