
import { TYPES_CREATE_PODIUM, TYPES_LOAD_PODIUM } from "./types";

export const createPodiumDriver = (data) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM,
    payload: data,
});

export const createPodiumSuccess = (event) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM_SUCCESS,
    payload: event,
})

export const createPodiumFailure = (messages) => ({
    type: TYPES_CREATE_PODIUM.CREATE_PODIUM_FAILURE,
    payload: messages,
});

export const loadingPodium = podiumId => ({
    type: TYPES_LOAD_PODIUM.LOADING_PODIUM,
    payload: podiumId,
});

export const loadingPodiumSuccess = podium => ({
    type: TYPES_LOAD_PODIUM.LOAD_PODIUM_SUCCESS,
    payload: podium,
});

export const loadingPodiumFailure = error => ({
    type: TYPES_LOAD_PODIUM.LOAD_PODIUM_FAILURE,
    payload: error,
});