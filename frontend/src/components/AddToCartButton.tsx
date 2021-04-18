import { Button } from "@material-ui/core";
import React from "react";

type addToCartButtonProps = {
  addToCart: () => void;
};

export const AddToCartButton = (props: addToCartButtonProps) => {
  return <Button onClick={props.addToCart}>Add to cart</Button>;
};
