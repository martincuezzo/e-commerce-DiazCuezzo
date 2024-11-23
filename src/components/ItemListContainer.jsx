import React,{useState,useEffect} from "react"
import { Button, Container } from "react-bootstrap"
import { getProductos } from "../mock/data"
import ItemList from "./ItemList"

const ItemListContainer = (props) =>{
  //nuevo codigo
  const [productos,setProductos]=useState([])   //creo espacio para el array pedido
  const [loading,setLoading]=useState(false)    //estado que maneja el cargando

  //simulacion de pedido de dato
  useEffect(()=>{
    setLoading(true)
    getProductos()
    .then((res)=>setProductos(res))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[])

  //nuevo codigo
    const {greeting} = props
   
   
   


return(
       <Container fluid className="bg-dark text-white">
      <div className="text-center">
        <p>{greeting}</p>
      </div>
      
     {/* si loading es true, entonces mostrame el msj de cargando, de lo contrario hace el map */}
      
      {loading ? <p>Cargando...</p>: <ItemList products={productos}/>}
    </Container>
    
    )
}

export default ItemListContainer