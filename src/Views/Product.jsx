import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const url = `https://63b6363f1907f863aaf0745c.mockapi.io/data/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  if (product.loading) {
    content = (
      <div class="flex justify-center items-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
          role="status"
        >
          <span class="visually-hidden"></span>
        </div>
      </div>
    );
  }

  if (product.error) {
    content = <h1>There was an error please refresh or try again later.</h1>;
  }

  return (
    <>
      <h1 className="font-bold text-5xl mb-3">This is Product Page</h1>
      {content}
    </>
  );
}

export default Product;
