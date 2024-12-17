import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="empty-cart-container text-center py-5">
            <img src="error-404.png" alt='error' style={{width:'90%', marginBottom:15}}/>
            <Link className='btn btn-dark'to='/'>Volver a Inicio</Link>
            </div>
    </div>
  )
}

export default Error