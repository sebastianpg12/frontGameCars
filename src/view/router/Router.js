import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
