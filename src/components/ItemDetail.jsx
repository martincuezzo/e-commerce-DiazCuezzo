import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
  
     //parte de itemcount / mostrar msj de agregado al carrito
     const [purchase,setPurchase]=useState(false)
     const {addItem}=useContext(CartContext)
     const onAdd= (cantidad)=>{
        setPurchase(true)
        addItem(producto,cantidad)
      }
      
  return (
    <div className="my-4 mx-auto text-center w-30 w-sm-100">
    <h2 className="text-center text-secondary">detalle del producto: {producto.nombre}</h2>
    <img className="img-fluid" src={producto.img} alt={producto.nombre} />
    <p className="text-muted">{producto.descripcion}</p>
    <p className="text-secondary">${producto.precio}</p>
    {purchase ? <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />}
    </div>


  )
}

export default ItemDetail