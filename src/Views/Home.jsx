import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://63b6363f1907f863aaf0745c.mockapi.io/data?page=1&limit=10`;
  let products = useAxiosGet(url);
  let content = null;
  if (products.data) {
    content = products.data.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    });
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <h1>There was an error please refresh or try again later.</h1>;
  }

  return (
    <>
      <h1 className="font-bold text-5xl mb-4">Best Sellers</h1>
      {content}
    </>
  );
}

export default Home;
