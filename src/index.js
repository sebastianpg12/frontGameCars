import React from "react";
import ReactDOM from "react-dom";
import Router from "../src/view/router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import {configureStore} from "./application/store/store";
import { Provider } from "react-redux";
import playerService from "./infrastructure/services/playerService";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(playerService)}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
