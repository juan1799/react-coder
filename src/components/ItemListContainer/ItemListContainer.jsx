import React from "react";
import "./ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return <p className="itemList">{greeting}</p>;
};

export default ItemListContainer;
