import { createTrackFailure, createTrackSucces } from "../../../application/actions/TrackActions";
import { TYPES_CREATE_TRACK } from "../../actions/types";

const addTracklow = ({ trackService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_CREATE_TRACK.CREATE_TRACK) {
      try {
        const event = await trackService.create(action.payload.data);
        dispatch(createTrackSucces(event.data));
      } catch (error) {
        dispatch(createTrackFailure(error.message));
      }
    }
  };

const trackMiddleware = [addTracklow];

export default trackMiddleware;
