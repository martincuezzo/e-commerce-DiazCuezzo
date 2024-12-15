import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {
  const navegar = useNavigate()


  return (
<div className="card" style={{width:'18rem'}}>
  <img  src={product.img} className="card-img-top" alt={product.nombre}/>
  <div className="card-body">
    <h5 className="card-title">{product.nombre}</h5>
    <p className="card-text">${product.precio}</p>
    <button className="btn btn-dark m-2" onClick={()=> navegar(`/item/${product.id}`)} > Ver más</button>
  </div>
</div>
  )
}

export default Item