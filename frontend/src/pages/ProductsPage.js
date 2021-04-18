import React from "react";
import { ProductGrid } from "../components/ProductGrid";
import { useEffect, useState } from "react";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};
