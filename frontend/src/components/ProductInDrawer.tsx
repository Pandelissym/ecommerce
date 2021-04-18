import { Card, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Product } from "../types/ProductType";

type ProductInDrawerProps = {
  productId: string;
  amount: number;
};

export const ProductInDrawer = (props: ProductInDrawerProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/" + props.productId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [props.productId]);

  if (product == null) return <div>id: {props.productId}</div>;
  else
    return (
      <Card elevation={0}>
        <Grid container alignItems="center" justify="center">
          <Grid container justify="center" item xs={12}>
            <img alt="" src={product.image} width="150px" height="150px"></img>
          </Grid>
          <Typography>{product.name}</Typography>
          <Typography>{props.amount}</Typography>
        </Grid>
      </Card>
    );
};
