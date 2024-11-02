import { Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";


const Cartwidget= () =>{
    return(
        <div>
        <Button variant="dark">
        <FaShoppingCart fontSize={'1.3rem'}/> <Badge bg="secondary">4</Badge>
        </Button>
        </div>
    )
}
export default Cartwidget