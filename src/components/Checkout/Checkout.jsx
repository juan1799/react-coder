import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from '../../firebase/config';

const Checkout = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    const  {carrito, precioTotal, vaciarCarrito, cantidadEnCarrito} = useContext(CartContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

      
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los campos requeridos")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const db = getFirestore();
        
        const orden = {
            items: carrito.map((producto) => ({
                id: producto.id,
                titulo: producto.titulo,
                cantidad: producto.cantidad
            })),
            total: precioTotal(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        console.log(orden)
         Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db,"productos",productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
             
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

                
            })
        ) .then(() => {
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef) => { 
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })

        })
        .catch((error) => {
            console.log(error)
            setError("No se puede actualizar el stock")
        })
        
        
    }
    
  return (
    <div className='container'>

    

    <form onSubmit={manejadorFormulario}>
        <h2>Productos</h2>
        {carrito.map((producto) => (

            <div key={producto.id}>

                <div>
                    <img src={producto.imagen} className='img-checkout' alt="" />
                    <p>{producto.titulo} x {producto.cantidad}</p>
                    
                </div>
                <hr/>

            </div>
            
            
        ))}

        <div className='formulario'>
            <h1>Ingresa tus datos</h1>
            <div className='form-item'>
                <label htmlFor="Nombre">Nombre</label>
                <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className='form-item'>
                <label htmlFor="Apellido">Apellido</label>
                <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div className='form-item'>
                <label htmlFor="Nombre">Teléfono</label>
                <input name="Teléfono" type='text' onChange={(e) => setTelefono(e.target.value)}/>
            </div>

            <div className='form-item'>
                <label htmlFor="Email">Email</label>
                <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='form-item'>
                <label htmlFor="EmailConfirmacion">Email Confirmacion</label>
                <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            <button type='submit' className='btn-checkout'>Completar compra</button>

            {error && <p style={{color: "red"}}>{error}</p>}

            {ordenId && (
                <h2>
                    ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                </h2>
            )}

        </div>
        
    </form>
</div>
  )
}

export default Checkout