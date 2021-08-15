import { createGameFailure, createGameSuccess } from "../../../application/actions/GameActions";
import { createTrackSucces, createTrackFailure } from "../../../application/actions/TrackActions";
import { createPodiumSuccess, createPodiumFailure } from "../../../application/actions/PodiumActions"
import { TYPES_CREATE_GAME } from "../../../application/actions/types";
import { trackService } from "../../../infrastructure/services/trackService";
import { podiumService } from "../../../infrastructure/services/podiumService"
import { toApiPodiumMapper } from "../../../infrastructure/mappers/to-api-podium.mapper"
import { toApiGameMapper } from "../../../infrastructure/mappers/to-api-game.mapper";
import { fn } from "../../../infrastructure/utils/localStorage";

const addGamelow = ({ gameService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_CREATE_GAME.CREATE_GAME) {
      try {
        const event = await trackService.create(action.payload);
        dispatch(createTrackSucces(event.data));
        fn.saveToLocal("PODIUM_ID", event.data.podiumId);

        try {
          const data = toApiGameMapper(action.payload);
          const event = await gameService.create(data);
          dispatch(createGameSuccess(event.data));

          fn.saveToLocal("GAME_ID", event.data.gameId);
          fn.saveToLocal("TRACK_ID", event.data.trackId);

          try {
           
            const auxData = {
              podiumId: fn.getFromLocal("PODIUM_ID"),
              gameId: fn.getFromLocal("GAME_ID"),
            };

            const data = toApiPodiumMapper(auxData);
            const event = await podiumService.create(data);
            dispatch(createPodiumSuccess(event.data));
          }
          catch (error) { dispatch(createPodiumFailure(error.message)); }

        } catch (error) { dispatch(createGameFailure(error.message)); }

      } catch (error) { dispatch(createTrackFailure(error.message)); }
    }
  };

const gameMiddleware = [addGamelow];

export default gameMiddleware;