// debe tener controlador y boton
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
        <button className="btn btn-danger" onClick={restar}>menos</button>
        <span className="">{contador}</span>
        <button className="btn btn-success" onClick={sumar}>mas</button>
        </div>
       <button className="btn btn-primary" onClick={ValidateOnAdd}>agregar al carrito</button>
    </div>


    )
    

}
export default ItemCount