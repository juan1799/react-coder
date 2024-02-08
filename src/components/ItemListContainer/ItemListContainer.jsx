import React, {useState, useEffect} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Productos");

    useEffect(() => {
        pedirDatos()
            .then((res) => {
              if(categoria){
                setProductos(res.filter((prod)=> prod.categoria === categoria))
                setTitulo(categoria)
              }else{
                setProductos(res)
                setTitulo("Productos")
              }
                
        })
    }, [categoria])
    
  return (
    <div>
        {
        productos.length == 0 
        ? 
        <div className='item-carga'>
          <h1>CARGANDO...</h1>
          <img src="../assets/img/isotype.svg" alt="" />
        </div> 
        : 
        <ItemList productos={productos} titulo={titulo}/>
        }
        
    </div>
  )
}
export default ItemListContainer