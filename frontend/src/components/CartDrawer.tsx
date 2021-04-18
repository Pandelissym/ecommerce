import { Drawer, makeStyles, Typography } from "@material-ui/core";
import { Cart } from "../types/ProductType";
import { ProductInDrawer } from "./ProductInDrawer";

type CartDrawerProps = {
  open: boolean;
  callback: (event: Object) => void;
  cart: Cart;
};

const useStyles = makeStyles({
  drawer: {
    width: "500px",
  },
});

export const CartDrawer = (props: CartDrawerProps) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={props.open}
      onClose={props.callback}
      elevation={0}
      PaperProps={{
        className: classes.drawer,
      }}
    >
      <Typography align="center">Your Cart</Typography>
      {Object.entries(props.cart).map((x) => (
        <ProductInDrawer key={x[0]} productId={x[0]} amount={x[1]} />
      ))}
    </Drawer>
  );
};
