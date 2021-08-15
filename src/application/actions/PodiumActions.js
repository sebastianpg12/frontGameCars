
import { TYPES_CREATE_PODIUM} from "./types";

export const createPodiumDriver = (data) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM,
    payload: data,
});

export const createPodiumSuccess = (event) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM_SUCCESS,
    payload: event,
})

export const createPodiumFailure = (messages) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM_SUCCESS,
    payload: messages,
});