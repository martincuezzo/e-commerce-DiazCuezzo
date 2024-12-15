import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { MdDelete } from 'react-icons/md'

const CartItem = ({prod}) => {
    const {removeItem} = useContext(CartContext)
  return (
            
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
  <div style={{ height: '1px', backgroundColor: '#ccc', margin: '20px 0' }}></div>
</div>

  )
}

export default CartItem 