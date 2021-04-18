import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./css/app.css";
import { Menu } from "./components/menu/Menu.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { useState } from "react";
import { CartProducts } from "./types/CartProducts";

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
  const [cart, setCart] = useState<CartProducts>({});

  let addToCart = (product: { productId: number; amount: number }) => {
    let total = product.amount;
    total +=
      cart[product.productId] === undefined ? 0 : cart[product.productId];
    let newCart = { ...cart };
    newCart[product.productId] = total;
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Menu itemsAmount={Object.keys(cart).length} />
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
