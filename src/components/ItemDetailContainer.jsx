import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import {db} from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    const {id} = useParams() //para traerme la direccion, en string

    //firebase
    useEffect(()=>{
    //traemos collecion y proyect firebase
    const collectionProd= collection(db,"productos")
      //creamos referencia
      const docRef= doc(collectionProd,id)
      //traer documento
      getDoc(docRef)
      .then((res)=> setProducto({id: res.id, ...res.data()}))
      .catch((error)=> console.log(error))
      
    },[])



    // Mock local
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setProducto(res))
    //     .catch((error)=> console.log(error))
    // },[])
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer