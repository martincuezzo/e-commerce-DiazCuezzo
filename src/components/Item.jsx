import React from 'react'

const Item = ({product}) => {
  return (
<div className="card" style={{width:'18rem'}}>
  <img src={product.img} className="card-img-top" alt={product.nombre}/>
  <div className="card-body">
    <h5 className="card-title">{product.nombre}</h5>
    <p className="card-text">${product.precio}</p>
    <a href="#" className="btn btn-primary">Ver más</a>
  </div>
</div>
  )
}

export default Item