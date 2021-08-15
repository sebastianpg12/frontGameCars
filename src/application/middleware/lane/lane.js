import { createLaneSuccess, createLaneFailure } from "../../../application/actions/LaneActions";
import { TYPES_CREATE_LANE } from "../../actions/types";

const addLanelow = ({ railService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_CREATE_LANE.CREATE_LANE) { 
            try {
                const event = await railService.create(action.payload.data);
                dispatch(createLaneSuccess(event.data));
            } catch (error) {
                dispatch(createLaneFailure(error.message));
            }
        }
    };

const railMiddleware = [addLanelow];

export default railMiddleware;
