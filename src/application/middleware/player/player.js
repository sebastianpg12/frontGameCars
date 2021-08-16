import { 
  createPlayerFailure, 
  createPlayerSuccess, 
  loadingPlayersSuccess, 
  loadingPlayersFailure 
} from "../../../application/actions/PlayerActions";

import { createDriverSuccess, createDriverFailure } from "../../../application/actions/DriverActions";
import { createCarSuccess, createCarFailure } from "../../../application/actions/CarActions";
import { createLaneSuccess, createLaneFailure } from "../../../application/actions/LaneActions"
import { loadingPlayers } from "../../../application/actions/PlayerActions";
import { TYPES_CREATE_PLAYER, TYPES_LOAD_PLAYERS } from "../../../application/actions/types";
import { laneService } from "../../../infrastructure/services/laneService";
import { driverService } from "../../../infrastructure/services/driverService";
import { carService } from "../../../infrastructure/services/carService";
import { toApiDriverMapper } from "../../../infrastructure/mappers/to-api-driver.mapper";
import { toApiCarMapper } from "../../../infrastructure/mappers/to-api-car.mapper";
import { toApiLaneMapper } from "../../../infrastructure/mappers/to-api-lane.mapper";
import { apiToCarMapper } from "../../../infrastructure/mappers/api-to-car.mapper";
import { fn } from "../../../infrastructure/utils/localStorage";

const addPlayerlow = ({ playerService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);

    if (action.type === TYPES_CREATE_PLAYER.CREATE_PLAYER) {
      try {
        const event = await playerService.create(action.payload);
        dispatch(createPlayerSuccess(event.data));

        try {
          const data = toApiDriverMapper(action.payload.playerId);
          const event = await driverService.create(data);
          dispatch(createDriverSuccess(event.data));
          fn.saveToLocal("CAR_ID", event.data.carId);
          fn.saveToLocal("LANE_ID", event.data.laneId);
          fn.saveToLocal("DRIVER_ID", event.data.driverId); 

          try {
            const auxData = {
              driverId: fn.getFromLocal("DRIVER_ID"),
              carId: fn.getFromLocal("CAR_ID"),
              laneId: fn.getFromLocal("LANE_ID"),
              gameId: fn.getFromLocal("GAME_ID"),
              namePlayer: action.payload.name
            }

            const data = toApiCarMapper(auxData);
            const event = await carService.create(data);
            const car = apiToCarMapper(event.data);
            dispatch(createCarSuccess(car));
            
            try {
              const auxData = {
                driverId: fn.getFromLocal("DRIVER_ID"),
                carId: fn.getFromLocal("CAR_ID"),
                laneId: fn.getFromLocal("LANE_ID"),
                gameId: fn.getFromLocal("GAME_ID"),
                trackId: fn.getFromLocal("TRACK_ID"),
              }

              const data = toApiLaneMapper(auxData);
              const event = await laneService.create(data);
              dispatch(createLaneSuccess(event.data));
              dispatch(loadingPlayers(fn.getFromLocal("GAME_ID")));
            } catch (error) { dispatch(createLaneFailure(error.message)); }

          } catch (error) { dispatch(createCarFailure(error.message)); }

        } catch (error) { dispatch(createDriverFailure(error.message)); }
        
      } catch (error) { dispatch(createPlayerFailure(error.message)); }
    }
  };  

const loadPlayersFlow = ({ playerService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_LOAD_PLAYERS.LOADING_PLAYERS ) {
      try {
        const players = await playerService.load(action.payload);
        dispatch(loadingPlayersSuccess(players.data));
      } catch (error) {
        dispatch(loadingPlayersFailure(error));
      }
    }
  };



const playerMiddleware = [
  addPlayerlow,
  loadPlayersFlow,
];

export default playerMiddleware;
