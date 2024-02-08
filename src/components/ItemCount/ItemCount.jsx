import React, {useState} from 'react'

const ItemCount = ({initial,stock}) => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        alert("AGREGASTE ESTA CANTIDAD DE PRODUCTOS "+contador)
    }

  return (
    <div className='contador'>

        <button onClick={decrementar} className='boton-contador'>-</button>

        <p>{contador}</p>

        <button onClick={incrementar} className='boton-contador'>+</button>

        <button onClick={agregarCarrito} className='boton-contador'>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount;