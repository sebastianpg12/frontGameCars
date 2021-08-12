import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Router from "./router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
