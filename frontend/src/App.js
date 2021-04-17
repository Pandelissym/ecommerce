import { useEffect, useState } from "react";
import Product from "./components/Product.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { ProductDetails } from "./ProductDetails.js";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div>
          {products.map((x) => (
            <Product
              key={x.id}
              id={x.id}
              name={x.name}
              image={x.image}
              price={x.price}
            />
          ))}
        </div>
      </Route>
      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>
    </Router>
  );
}

export default App;
