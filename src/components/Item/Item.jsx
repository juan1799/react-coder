import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img className="imagen" src={producto.imagen} alt="" />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link  className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item