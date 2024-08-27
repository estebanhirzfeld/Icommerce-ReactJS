import { useState, useEffect } from "react";
import "./itemListConteiner.css";
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";

export const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const filteredProducts = categoryId
          ? data.filter((p) => p.category === categoryId)
          : data;
        setProducts(filteredProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="conteiner">
      <h1>{greeting}</h1>

      <ItemList product={products} />

      {loading ? <Spinner /> : <ItemList product={products} />}
    </div>
  );
};
