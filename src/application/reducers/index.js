import { combineReducers } from "redux";
import { playerReducer } from "./player/PlayerReducer";
import { carReducer } from "./car/CarReducer";
import { driverReducer } from "./driver/DriverReducer";
import { laneReducer } from "./lane/LaneReducer";
import { podiumReducer } from "./podium/PodiumReducer";
import { trackReducer } from "./track/TrackReducer";
import { gameReducer } from "./game/GameReducer"

export default combineReducers({
  playerReducer,
  carReducer,
  driverReducer,
  laneReducer,
  podiumReducer,
  trackReducer,
  gameReducer
});
