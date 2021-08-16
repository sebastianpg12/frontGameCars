import { createPodiumFailure, createPodiumSuccess, loadingPodiumSuccess, loadingPodiumFailure, createPodiumDriver } from "../../../application/actions/PodiumActions";
import { TYPES_CREATE_PODIUM, TYPES_LOAD_PODIUM } from "../../actions/types";
import { toApiFillPodiumMapper } from "../../../infrastructure/mappers/to-api-podium.mapper"

const addPodiumlow = ({ podiumService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_CREATE_PODIUM.CREATE_PODIUM) {
            try {
                const event = await podiumService.create(action.payload);
                dispatch(createPodiumSuccess(event.data));
            } catch (error) {
                dispatch(createPodiumFailure(error.message));
            }
        }
    };

const loadPodium = ({ podiumService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_LOAD_PODIUM.LOADING_PODIUM) {
            try {
                const event = await podiumService.loadById(action.payload.podiumId);
                const fillPodium = toApiFillPodiumMapper({ cars: action.payload.cars, podium: event.data })
                dispatch(createPodiumDriver(fillPodium));
                dispatch(loadingPodiumSuccess(event.data));
            } catch (error) {
                dispatch(loadingPodiumFailure(error.message));
            }
        }
    };

    
const podiumMiddleware = [addPodiumlow, loadPodium];

export default podiumMiddleware;
