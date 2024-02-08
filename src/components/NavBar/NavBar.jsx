import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><img src="../assets/img/logo_light_horizontal.svg" alt="" /></Link>
        <ul className="menu">

            <li><NavLink  className="menu-link" to="/">Inicio</NavLink></li>
            <li><NavLink  className="menu-link" to="/productos">Productos</NavLink></li>

            <li><NavLink  className="menu-link" to="/productos/funkos">Funkos</NavLink></li>
            <li><NavLink  className="menu-link" to="/productos/llaveros">Llaveros</NavLink></li>
            <li><NavLink  className="menu-link" to="/productos/remeras">Remeras</NavLink></li>

        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar