import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const url = `https://63b6363f1907f863aaf0745c.mockapi.io/data/${id}`;
  const [product, setProduct] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.images} alt={product.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-bold text-5xl mb-3">This is Product Page</h1>
      {content}
    </>
  );
}

export default Product;
