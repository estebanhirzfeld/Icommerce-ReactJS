import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom";

export const ItemDetailConteiner = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const newProduct = data.find((product) => product.id === Number(id));
        setProduct(newProduct);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {product == undefined ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
};
