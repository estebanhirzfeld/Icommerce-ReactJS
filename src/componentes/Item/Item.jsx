import React from 'react'

const Item = ({ item }) => {
    return (
            <div key={item.id} className='card'>
                
                <h2>{item.nombre}</h2>
                <img src={item.imagen} alt={item.nombre} className='hola' />
                <p>{item.precio}</p>

            </div>
    )
}

export default Item