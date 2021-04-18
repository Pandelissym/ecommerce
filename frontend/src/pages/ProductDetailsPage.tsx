import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCartButton } from "../components/AddToCartButton";
import { Product } from "../types/ProductType";

type ProductDetailsPageProps = {
  addToCart: (productId: string, amount: number) => void;
};

export const ProductDetailsPage = (props: ProductDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const addProductToCart = (productId: string, amount: number) => () =>
    props.addToCart(productId, amount);

  if (product == null) {
    return <div>Loading</div>;
  } else
    return (
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.size}</p>
        <p>{product.color}</p>
        <img alt="" src={product.image} width="200px" height="200px"></img>
        <p>{product.price}</p>
        <AddToCartButton addToCart={addProductToCart(product.id, 1)} />
      </div>
    );
};
