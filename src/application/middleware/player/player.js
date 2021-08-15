import { createPlayerFailure, createPlayerSucces } from "../../../application/actions/PlayerActions";
import { TYPES_CREATE_PLAYER } from "../../../application/actions/types";

const addPlayerlow = ({ playerService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);

    if (action.type === TYPES_CREATE_PLAYER.CREATE_PLAYER) {
      try {
        const event = await playerService.create(action.payload);
        dispatch(createPlayerSucces(event.data));
      } catch (error) { dispatch(createPlayerFailure(error.message)); }
    }
  };

const playerMiddleware = [addPlayerlow];

export default playerMiddleware;
