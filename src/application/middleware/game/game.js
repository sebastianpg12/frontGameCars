import { createGameFailure, createGameSuccess } from "../../../application/actions/GameActions";
import { createTrackSucces, createTrackFailure } from "../../../application/actions/TrackActions";
import { TYPES_CREATE_GAME } from "../../../application/actions/types";
import { trackService } from "../../../infrastructure/services/trackService";
import { toApiGameMapper } from "../../../infrastructure/mappers/to-api-game.mapper";

const addGamelow = ({ gameService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_CREATE_GAME.CREATE_GAME) {
      try {
        const event = await trackService.create(action.payload);
        dispatch(createTrackSucces(event.data));
        try {
          const data = toApiGameMapper(action.payload);
          const event = await gameService.create(data);
          dispatch(createGameSuccess(event.data));
        } catch (error) {
          dispatch(createGameFailure(error.message));
        }
      } catch (error) {
        dispatch(createTrackFailure(error.message));
      }
    }
  };

const gameMiddleware = [addGamelow];

export default gameMiddleware;