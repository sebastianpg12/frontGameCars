import middleware from "../middleware/index";
import reducers from "../reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = services => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware.map((fn) => fn(services)))),
  );
};
