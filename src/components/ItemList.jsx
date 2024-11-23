import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap gap-4 mt-4'>
        {products.map((product)=> <Item product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemList