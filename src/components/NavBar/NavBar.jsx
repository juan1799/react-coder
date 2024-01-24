import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src="./img/logo_light_horizontal.svg" alt="" />
        <ul className="navbar">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;
