import { useEffect, useState } from "react";
import "./App.css";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setStatus("fullfill");
        setProducts(json);
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
        setError("error");
      });
  }, []);

  if (status == "loading") {
    return <h2>Loading...</h2>;
  }

  if (error == "error") {
    return <h2>Ooops, Tải trang gặp sự cố!!!...</h2>;
  }

  return (
    <div className="App">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;
