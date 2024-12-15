import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { MdDelete } from 'react-icons/md'

const CartItem = ({prod}) => {
    const {removeItem} = useContext(CartContext)
  return (
    
    // <div className="container py-4">
    //     <div className="row align-items-center">
    //     {/* Columna para la imagen */}
    //     <div className="col-12 col-md-6 text-center">
    //       <img src={prod.img} alt={prod.name} className="img-fluid" style={{ maxWidth: '10rem', objectFit: 'contain' }}
    //       />
    //     </div>

    //     {/* Columna para los textos y el botón */}
    //     <div className="col-12 col-md-6">
    //       <p className="mb-2">{prod.nombre}</p>
    //       <p className="mb-2">Cantidad: {prod.qty}</p>
    //       <p className="mb-4">${prod.precio}</p>
    //       <button className="btn btn-dark" onClick={() => removeItem(prod.id)}>
    //         Eliminar
    //       </button>
    //     </div>
    //     </div>
    // </div>
    
    <div className="container py-4">
  {/* Fila de datos del producto */}
  <div className="row d-flex align-items-center">
    {/* Imagen del producto */}
    <div className="col-12 col-md-2 text-center">
      <img src={prod.img} alt={prod.name} className="img-fluid" style={{ maxWidth: '10rem', objectFit: 'contain',marginBottom:'5px' }} />
    </div>

    {/* Nombre del producto */}
    <div className="col-12 col-md-2 text-center">
      <div className="font-weight-bold "> <h5>Nombre</h5></div>
      <div>{prod.nombre}</div>
    </div>

    {/* Cantidad del producto */}
    <div className="col-12 col-md-2 text-center">
      <div className="font-weight-bold"><h5>Cantidad</h5></div>
      <div>{prod.qty}</div>
    </div>

    {/* Precio del producto */}
    <div className="col-12 col-md-2 text-center">
      <div className="font-weight-bold"><h5>Precio</h5></div>
      <div>${prod.precio}</div>
    </div>

    {/* Subtotal */}
    <div className="col-12 col-md-2 text-center">
      <div className="font-weight-bold"><h5>Subtotal</h5></div>
      <div>${prod.precio * prod.qty}</div>
    </div>

    {/* Botón de eliminar */}
    <div className="col-12 col-md-1 text-center">
      <button className="border-0 bg-transparent" aria-label="Eliminar producto" onClick={() => removeItem(prod.id)}>
      <MdDelete size={24}/>
      </button>
    </div>
  </div>

  {/* Línea horizontal gris entre productos */}
  <hr className="my-4" style={{ borderColor: '#ccc' }} />
</div>

  )
}

export default CartItem 