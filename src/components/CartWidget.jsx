import { Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Cartwidget= () =>{
    const {cartQty}= useContext(CartContext)
    return(
        <div>
        <Link className='btn btn-dark' to='/cart' >
        <FaShoppingCart fontSize={'1.3rem'}/> {cartQty()}


        </Link>
        </div>
    )
}
export default Cartwidget