import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Checkout = () => {
  const {register,handleSubmit,getValues,formState:{errors}} =useForm()
//   const [orderId, setOrderId] = useState('')
//   const {cart, cartTotal, clear} = useContext(CartContext)


  const onSubmit =(dataDelForm)=>{
    //se ejecuta cuando todas las validaciones son correctas
    console.log(dataDelForm)
    
    // let order = {
    //     buyer :{
    //         name: dataDelForm.nombre,
    //         lastname: dataDelForm.apellido,
    //         tel:dataDelForm.telefono,
    //         address: dataDelForm.direccion,
    //         email: dataDelForm.email1
    //     },
    //     carrito:cart,
    //     total: cartTotal(),
    //     date: serverTimestamp()
    // }
    
    // traer la colecction

    



  }

  
    return (
    <div>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input className='form-control' {...register("nombre", {required:true, minLength:5})}/>
        {errors?.nombre?.type === "required" && <p style={{color:'gray'}}>Debe completar el campo Nombre</p>}
        {errors?.nombre?.type === "minLength" && <p style={{color:'gray'}}>Su nombre debe tener minimo 5 caracteres</p> }
        
        <label>Apellido</label>
        <input className='form-control' {...register("apellido", {required:true})}/>
        {errors?.apellido?.type === "required" && <p style={{color:'gray'}}>Debe completar el campo Apellido</p>}

        <label>Teléfono</label>
        <input type="tel" className='form-control'{...register("telefono", {required: true, pattern: /^[0-9]{10}$/})}/>
        {errors?.telefono?.type === "required" && <p style={{color:'gray'}}>Debe completar el campo Teléfono</p>}
        {errors?.telefono?.type === "pattern" && <p style={{color:'gray'}}>El teléfono debe contener 10 dígitos numéricos</p>}


        <label>Dirección</label>
        <input className='form-control' {...register("direccion", {required:true})}/>
        {errors?.direccion?.type === "required" && <p style={{color:'gray'}}>Complete el campo Dirección</p>}
       
        <label>Email</label>
        <input className='form-control' type='email' name='email1'{...register("email1", {required:true})}/>
        {errors?.email1?.type === "required" && <p style={{color:'gray'}}>Por favor complete el campo Email</p>}
        
        <label>Confirmación de Email</label>
        <input className='form-control' type='email' name='email2' {...register("email2", {required:true, validate:{equalMails: mail2 => mail2 === getValues().email1}})}/>
        {errors?.email2?.type === "required" && <p style={{color:'gray'}}>Por favor complete el campo de Confirmación de email</p>}
        {errors?.email2?.type === "equalMails" && <p style={{color:'gray'}}>Los emails deben ser iguales</p>} 
        {/* ATENCION!! */}
        {/* usar en el boton: disabled={!cart.length} */}
        <button className='btn btn-dark' >Confirmar compra</button>
        
        </form>


    </div>
  )
}

export default Checkout