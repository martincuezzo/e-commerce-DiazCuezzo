import React,{useState,useEffect} from "react"
import { getProductos } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = (props) =>{
  
  const [productos,setProductos]=useState([])   //creo espacio para el array pedido
  const [loading,setLoading]=useState(false)    //estado que maneja el cargando
  const {categoria}=useParams()
  
// firebase
useEffect(()=>{
setLoading(true)
//conectamos con la coleccion
const productsCollection=categoria 
? query(collection(db,"productos"),where("categoria","==",categoria)) 
  : collection(db,"productos")

//Pedir documentos - con metodo getDocs
getDocs(productsCollection)
.then((res)=>{
   // creamos una lista procesando los documentos obtenidos
  const list = res.docs.map((product)=>{
      return{
          id: product.id, // extraemos el id único del documento
          ...product.data() // obtenemos todos los campos del documento
      }
  })
  setProductos(list) // actualizamos el estado 'productos' con la lista obtenida
} )
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))

},[categoria])

// MOCK LOCAL
//   useEffect(()=>{
//     setLoading(true)
//     getProductos()
    
//   .then((res)=>{
//     if(categoria){
//         //filtro
//         setProductos(res.filter((producto) => producto.categoria === categoria))
//     }else{
//         //respuesta sin filtrar
//         setProductos(res)
//     }
// })
//     .catch((error)=>console.log(error))
//     .finally(()=>setLoading(false))
//   },[categoria])

    const {greeting} = props
   
   
return(
       <Container fluid>
      <div className="text-center bg-dark text-white">
        <p>{greeting}</p>
      </div>
      
     {/* si loading es true, entonces mostrame el msj de cargando, de lo contrario hace el map */}
      
      {loading ? <p>Cargando...</p>: <ItemList products={productos}/>}
    </Container>
    
    )
}

export default ItemListContainer