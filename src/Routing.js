import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import CategoryList from "./components/CategoryLIst/CategoryList";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CategoryList name="main category" />
        </Route>
        <Route path="/categories/:parentId">
          <CategoryList name="subcategory" />
        </Route>
        <Route path="/snippets/:parentId">
          <Accordion />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
