import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><img src="../assets/img/logo_light_horizontal.svg" alt="" /></Link>
        <ul className="menu">

            <li><Link  className="menu-link" to="/">Inicio</Link></li>
            <li><Link  className="menu-link" to="/productos">Productos</Link></li>

            <li><Link  className="menu-link" to="/productos/funkos">Funkos</Link></li>
            <li><Link  className="menu-link" to="/productos/llaveros">Llaveros</Link></li>
            <li><Link  className="menu-link" to="/productos/remeras">Remeras</Link></li>

        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar