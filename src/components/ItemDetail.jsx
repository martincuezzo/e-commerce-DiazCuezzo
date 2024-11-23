import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

     //parte de itemcount / mostrar msj de agregado al carrito
     const onAdd= (cantidad)=>{
        alert(`se agrego al carrito ${cantidad} productos`)
      }

  return (
    <div>
    
    <h2>detalle del producto: {producto.nombre}</h2>
    <img src={producto.img} alt={producto.nombre} />
    <p>{producto.descripcion}</p>
    <p>${producto.precio}</p>
    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />





    </div>


  )
}

export default ItemDetail