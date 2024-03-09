import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
        <Link className="menu-link cartwidget" to="/carrito">
            <img src="../assets/img/cart-icon.svg" alt="" />
            <span className="numerito"> {cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget