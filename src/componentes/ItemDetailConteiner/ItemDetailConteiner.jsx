import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    const [product, useProduct] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('/productos.json')
            const data = await response.json()
            const newProduct = data.find(producto => producto.id === 1)
            setProducts(newProduct)
          }catch(error){
            console.log(error)
          }
        }

        fetchData()
      }, [])

  return (
       <div>
        <ItemDetail product={product}/>
       </div>
  )
}

export default ItemDetailConteiner