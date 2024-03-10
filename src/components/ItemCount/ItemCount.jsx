
const ItemCount = ({cantidad,handleRestar,handleSumar, handleAgregar }) => {


  return (

    <>
      <div className='item-count'>

        <button onClick={handleRestar} className='boton-contador'>-</button>

        <p>{cantidad}</p>

        <button onClick={handleSumar} className='boton-contador'>+</button>

      </div>
      <button onClick={handleAgregar} className='agregar-al-carrito'>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;