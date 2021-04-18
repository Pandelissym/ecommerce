import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";

export const ProductGrid = ({ products }) => {
  return <Grid container>{products.map((x) => makeGridItem(x))}</Grid>;
};

function makeGridItem(product) {
  return (
    <Grid style={{ padding: "0px" }} key={product.id} item xs={3}>
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </Grid>
  );
}
