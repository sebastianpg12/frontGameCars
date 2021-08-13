import { combineReducers } from "redux";

import { playerReducer } from "./PlayerReducer";
const reducers = combineReducers({
  player: playerReducer,
});
export default reducers;
