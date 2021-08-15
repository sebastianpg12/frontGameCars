import React from "react";
import ReactDOM from "react-dom";
import Router from "../src/view/router/Router";
import { configureStore } from "./application/store/store";
import { api } from "./infrastructure/index";
import { Provider } from "react-redux";
import "./view/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(api)}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
