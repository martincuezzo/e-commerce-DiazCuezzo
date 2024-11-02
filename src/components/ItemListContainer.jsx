import { Button, Container } from "react-bootstrap"

const ItemListContainer = (props) =>{
    const {greeting} = props
return(
       <Container fluid className="bg-dark text-white">
      <div className="text-center">
        <p>{greeting}</p>
      </div>
    </Container>
    )
}

export default ItemListContainer