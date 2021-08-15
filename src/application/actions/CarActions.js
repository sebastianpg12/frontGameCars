import { TYPES_CREATE_CAR, TYPES_LOAD_CARS } from "./types";

export const createCar = data => ({
  type: TYPES_CREATE_CAR.CREATE_CAR,
  payload: data,
});

export const createCarSucess = event => ({
  type: TYPES_CREATE_CAR.CREATE_CAR_SUCCESS,
  payload: event,
});

export const createCarFailure = messages => ({
  type: TYPES_CREATE_CAR.CREATE_CAR_FAILURE,
  payload: messages,
});

export const loadingCar = id => ({
  type: TYPES_LOAD_CARS.LOADING_CARS,
  payload: id,
});

export const loadingCarSucess = cars => ({
  type: TYPES_LOAD_CARS.LOAD_CARS_SUCCESS,
  payload: cars,
});

export const loadingCarsFailure = error => ({
  type: TYPES_LOAD_CARS.LOAD_CARS_FAILURE,
  payload: error,
});
