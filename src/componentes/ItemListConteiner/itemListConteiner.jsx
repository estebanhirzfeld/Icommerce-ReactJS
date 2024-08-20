import { useState, useEffect } from "react"
import './itemListConteiner.css'
import ItemList from "../ItemList/itemList"


const ItemListConteiner = ({ greeting }) => {

  const [product, setProducts] = useState([])

    useEffect(() => {

      const fetchData = async () => {
       try{
          const response = await fetch('/productos.json')
          const data = await response.json()
          setProducts(data)
       }catch(error){
        console.log(error)
       }
      }
    fetchData()
    },[])

  return (
    <div className="conteiner">

      <h1>{greeting}</h1>

      <ItemList product={product}/>

    </div>
  )
}

export default ItemListConteiner