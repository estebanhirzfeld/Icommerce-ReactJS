import { useState, useEffect} from "react"
import ItemList from "../ItemList/itemList"
import { useParams } from "react-router-dom"
import './itemListConteiner.css'


const ItemListConteiner = ({greeting}) => {
  
      const [products, setProducts] = useState([])

      const {categoryId} = useParams();

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
      }, [])

      console.log(categoryId);

  return (
    <div className="conteiner">
      <h2>{greeting}</h2>

      {products.map((product) => {
        return(
          <div className="conteiner">
                 
              <h1>{greeting}</h1>

              <ItemList key={product.id} product={products}/>
          </div>
        )
      })}

    </div>
  )
}

export default ItemListConteiner