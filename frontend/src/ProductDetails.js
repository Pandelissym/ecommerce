import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
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
    <Card>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.size}</p>
      <p>{product.color}</p>
      <img alt="" src={product.image} a=""></img>
      <p>{product.price}</p>
    </Card>
  );
};
