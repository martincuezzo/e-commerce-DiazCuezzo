import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    useEffect(()=>{
        getOneProduct(`1`)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
    },[])
    console.log(producto)
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer