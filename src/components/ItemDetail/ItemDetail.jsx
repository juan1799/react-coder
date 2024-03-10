import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {
    

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    const [cantidad,setCantidad] = useState(1);


    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad+1)
    }

    
    return (
        <div className="container container-item">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className='categoria'>Stock: {item.stock}</p>
                    <p className="precio">${item.precio}</p>
                    {item.stock==0 ? <h2>El producto no tiene stock</h2> : ( <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar}
                    handleAgregar ={()=>{
                        agregarAlCarrito(item,cantidad)
                    }}/>)}
                    
                    
                </div>

                
                
            </div>
        </div>
    )
}

export default ItemDetail