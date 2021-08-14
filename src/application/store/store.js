import { createStore, applyMiddleware } from "redux";
import middleware from "../middleware";
import reducers from "../reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = (playerService) => createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware.map(f => f(playerService))))
    
  );

