import React from 'react'
import ItemCount from './ItemCount'
import { Card, Button } from "react-bootstrap";

const ItemDetail = ({producto}) => {

     //parte de itemcount / mostrar msj de agregado al carrito
     const onAdd= (cantidad)=>{
        alert(`se agrego al carrito ${cantidad} productos`)
      }

  return (
    <div className="my-4 mx-auto text-center w-30 w-sm-100">
    <h2 className="text-center text-secondary">detalle del producto: {producto.nombre}</h2>
    <img className="img-fluid" src={producto.img} alt={producto.nombre} />
    <p className="text-muted">{producto.descripcion}</p>
    <p className="text-secondary">${producto.precio}</p>
    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />

    </div>


  )
}

export default ItemDetail