import React from 'react';
import {useForm} from 'react-hook-form';

const Contacto = () => {

  const {register, handleSubmit} = useForm();

  const enviar = (data) => {
    console.log(data)
  }
  return (
    <div className="container">
        <h1 className='main-tittle'>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
            <input type="phone" placeholder='Ingresa tu teléfono' {...register("telefono")}/>
            <button type='submit' className='enviar'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto