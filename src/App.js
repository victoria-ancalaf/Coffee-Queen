import React from "react";
import Home from "./Views/CoffeeQueen";
import Enter from "./Views/Selection";
import Food from "./Views/Chef";
import Waiter from "./Views/FoodOrders";
import MenuOptions from "./Views/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/FoodOrders">
          <Waiter />
        </Route>
        <Route path="/Chef">
          <Food />
        </Route>
        <Route path="/Menu">
          <MenuOptions />
        </Route>
        <Route path="/Selection">
          <Enter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
