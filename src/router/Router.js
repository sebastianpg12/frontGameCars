import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from '../redux/store/store';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
        </Provider>
        ,
      </Switch>
    </BrowserRouter>
  );
}
