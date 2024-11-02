import { Button } from "react-bootstrap"

const ItemListContainer = (props) =>{
    const {greeting} = props
return(
    <div>
    {/* debo darle estilo a esto */}
    <h2>{greeting}</h2>
    <Button variant="primary">Primary</Button>
    </div>
    
)

}

export default ItemListContainer