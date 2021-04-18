import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCartButton } from "../components/AddToCartButton";

export const ProductDetailsPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.size}</p>
      <p>{product.color}</p>
      <img alt="" src={product.image} a="" width="200px" height="200px"></img>
      <p>{product.price}</p>
      <AddToCartButton addToCart={props.addToCart} productId={product.id} />
    </div>
  );
};
