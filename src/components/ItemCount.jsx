import React, { useState } from "react"
const ItemCount = ({stock,initial,onAdd})=>{
    const [contador,setContador]= useState(initial)
  //  funcion para aumentar los item
    const sumar=()=>{
        if(contador<stock){
            setContador(contador+1)
        }
        
    }
    // funcion para restar item
    const restar=()=>{
        if(contador>1){
            setContador(contador-1)
        }
        
    }
    
    //verificar que exista stock
    const ValidateOnAdd= ()=>{
        if (stock > 0) {
            onAdd(contador);
          }

    }
    return(
    <div>    
        <div>
        <button className="btn btn-dark btn-sm m-2" onClick={restar}>-</button>
        <span className="">{contador}</span>
        <button className="btn btn-dark btn-sm m-2" onClick={sumar}>+</button>
        </div>
       <button className="btn btn-dark mt-2" onClick={ValidateOnAdd}>Agregar al carrito</button>
    </div>

    ) 

}
export default ItemCount