import { createRailSucces, createRailFailure } from "../../../application/actions/RailActions";
import { TYPES_CREATE_RAIL } from "../../actions/types";

const addRaillow = ({ railService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_CREATE_RAIL.CREATE_RAIL) { 
            try {
                const event = await railService.create(action.payload.data);
                dispatch(createRailSucces(event.data));
            } catch (error) {
                dispatch(createRailFailure(error.message));
            }
        }
    };

    
const railMiddleware = [addRaillow];

export default railMiddleware;
