import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.img}/>
        <p>{product.precio}</p>
        <p>{product.stock}</p>
    </div>
  )
}

export default ItemDetail