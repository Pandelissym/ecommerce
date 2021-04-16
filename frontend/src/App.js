import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function Product() {
  return <h1>Product</h1>;
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Product />{" "}
          </Route>
          <Route exact path="/hello">
            <h1>Hello</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
