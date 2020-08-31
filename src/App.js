import React from "react";
import "./App.css";
import Home from "./Views/CoffeeQueen";
import Enter from "./Views/Selection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
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
