import { combineReducers } from "redux";
import { playerReducer } from "./player/PlayerReducer";
import { carReducer } from "./car/CarReducer";
import { driverReducer } from "./driver/DriverReducer";
import { railReducer } from "./rail/RailReducer";
import { podiumReducer } from "./podium/PodiumReducer";
import { trackReducer } from "./track/TrackReducer";
import { gameReducer } from "./game/GameReducer"

export default combineReducers({
  playerReducer,
  carReducer,
  driverReducer,
  railReducer,
  podiumReducer,
  trackReducer,
  gameReducer
});
