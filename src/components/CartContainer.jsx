import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartContainer = () => {
    const {cart, clear, cartTotal} = useContext(CartContext)
  return (
    // <div>
    //     {
    //         !cart.length 
    //         ? <div>
    //             <h2> Tu carrito esta vacio!</h2>
    //             <Link to='/'>Ir a comprar</Link>
    //         </div>
    //         :<div className='Container fluid'>
    //             <h2> Tu Carrito!</h2>
    //             <div className="d-flex flex-wrap">
    //             {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
    //             </div>
    //             <div className="d-flex flex-wrap">
    //                 <span className="me-3">Total: {cartTotal()}</span>
    //                 <button className="btn btn-dark" onClick={clear}>Eliminar todos</button>
    //             </div>
    //         </div>
    //     }
    // </div>


    <div>
  {
    !cart.length 
      ? <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="empty-cart-container text-center py-5">
            <h2 className="text-dark mb-3">Tu carrito está vacío!</h2>
            <p className="text-muted mb-4">Parece que aún no has agregado productos a tu carrito.</p>
            <Link to="/" className="btn btn-dark btn-lg">Ir a comprar</Link>
            </div>
        </div>
      : <div className="container py-4">
          <h2>¡Tu Carrito!</h2>

          {/* Productos en el carrito */}
          <div className="d-flex flex-column">
            {cart.map((prod) => (
              <CartItem key={prod.id} prod={prod} />
            ))}
          </div>

          {/* Total y botón para eliminar todos */}
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <span className="font-weight-bold">Total: ${cartTotal()}</span>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-2 mt-md-0">
              <button className="btn btn-dark" onClick={clear}>Eliminar todos</button>
            </div>
          </div>
        </div>
  }
</div>

  )
}

export default CartContainer