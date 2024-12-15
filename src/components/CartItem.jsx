import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useContext(CartContext)
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
        <img src={prod.img} alt={prod.name} style={{width:'10rem'}}/>
        <span>{prod.nombre}</span>
        <span>Cantidad: {prod.qty}</span>
        <span>${prod.precio}</span>
        <button className='btn btn-dark' onClick={()=> removeItem(prod.id)}>eliminar</button>
    </div>
  )
}

export default CartItem 