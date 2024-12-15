import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartContainer = () => {
    const {cart, clear, cartTotal} = useContext(CartContext)
  return (
    <div>
        {
            !cart.length 
            ? <div>
                <h2> Tu carrito esta vacio!</h2>
                <Link to='/'>Ir a comprar</Link>
            </div>
            :<div className='Container fluid'>
                <h2> Tu Carrito!</h2>
                <div className="d-flex flex-wrap">
                {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
                </div>
                <div className="d-flex justify-content-center align-items-center m-2">
                    <span className="me-3">Total: {cartTotal()}</span>
                    <button className="btn btn-dark" onClick={clear}>Eliminar todos</button>
                </div>
            </div>
        }
    </div>
  )
}

export default CartContainer