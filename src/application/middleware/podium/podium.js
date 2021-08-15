import { createPodiumFailure, createPodiumSuccess } from "../../../application/actions/PodiumActions";
import { TYPES_CREATE_PODIUM } from "../../actions/types";

const addPodiumlow = ({ podiumService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_CREATE_PODIUM.CREATE_PODIUM) {
            try {
                const event = await podiumService.create(action.payload.data);
                dispatch(createPodiumSuccess(event.data));
            } catch (error) {
                dispatch(createPodiumFailure(error.message));
            }
        }
    };

    
const podiumMiddleware = [addPodiumlow];

export default podiumMiddleware;
