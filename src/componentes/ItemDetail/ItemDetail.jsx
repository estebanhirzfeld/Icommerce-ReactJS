import React from 'react'
import { Link } from 'react-router-dom'
import ContadorRef from '../example/ContadorRef'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.img}/>
        <p>{product.precio}</p>
        <p>{product.stock}</p>
        <p>Categoria: {product.category}</p>

        <ContadorRef/>

        <Link to="/"> Volver al inicio</Link>
    </div>
  )
}

export default ItemDetail