import { Button } from "@material-ui/core";
import React from "react";

export const AddToCartButton = (props) => {
  let addToCart = () => {
    let product = {
      productId: props.productId,
      amount: 1,
    };
    props.addToCart(product);
  };
  return <Button onClick={addToCart}>Add to cart</Button>;
};
