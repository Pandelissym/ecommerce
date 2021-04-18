import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Grid,
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";
import "./css/app.css";
import { Menu } from "./components/menu/Menu.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { useState } from "react";
import { Cart } from "./types/ProductType";
import { CartDrawer } from "./components/CartDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#575757",
      main: "#141414",
      dark: "black",
    },
    secondary: {
      light: "#575757",
      main: "#fff",
      dark: "black",
      contrastText: "#141414",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

function App() {
  const [cart, setCart] = useState<Cart>({});
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (toggle: boolean) => (event: object) =>
    setOpenDrawer(toggle);

  let addToCart = (productId: string, amount: number) => {
    let total = amount;
    total += cart[productId] === undefined ? 0 : cart[productId];
    let newCart = { ...cart };
    newCart[productId] = total;

    setCart(newCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Menu
              itemsAmount={Object.keys(cart).length}
              openDrawer={toggleDrawer(true)}
            />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/">
                <ProductsPage />
              </Route>
              <Route exact path="/products/:id">
                <ProductDetailsPage addToCart={addToCart} />
              </Route>
            </Switch>
          </Grid>
        </Grid>
        <CartDrawer
          cart={cart}
          open={openDrawer}
          callback={toggleDrawer(false)}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
