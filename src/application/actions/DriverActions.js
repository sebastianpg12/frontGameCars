
import { TYPES_CREATE_DRIVER } from "./types";

export const createDriver = (data) => ({
    type: TYPES_CREATE_DRIVER.CREATE_DRIVER,
    payload: data,
});

export const createDriverSuccess = (event) => ({
    type: TYPES_CREATE_DRIVER.CREATE_DRIVER_SUCCESS,
    payload: event,
})

export const createDriverFailure = (messages) => ({
    type: TYPES_CREATE_DRIVER.CREATE_DRIVER_FAILURE,
    payload: messages,
});