import { TYPES_CREATE_CAR, TYPES_LOAD_CARS, TYPES_ADVANCE_CAR } from "./types";

export const createCar = data => ({
  type: TYPES_CREATE_CAR.CREATE_CAR,
  payload: data,
});

export const createCarSuccess = event => ({
  type: TYPES_CREATE_CAR.CREATE_CAR_SUCCESS,
  payload: event,
});

export const createCarFailure = messages => ({
  type: TYPES_CREATE_CAR.CREATE_CAR_FAILURE,
  payload: messages,
});

export const loadingCars = id => ({
  type: TYPES_LOAD_CARS.LOADING_CARS,
  payload: id,
});

export const loadingCarsSuccess = cars => ({
  type: TYPES_LOAD_CARS.LOAD_CARS_SUCCESS,
  payload: cars,
});

export const loadingCarsFailure = error => ({
  type: TYPES_LOAD_CARS.LOAD_CARS_FAILURE,
  payload: error,
});

export const advanceCar = car => ({
  type: TYPES_ADVANCE_CAR.ADVANCE_CAR,
  payload: car,
});

export const advanceCarSuccess = car => ({
  type: TYPES_ADVANCE_CAR.ADVANCE_CAR_SUCCESS,
  payload: car,
});

export const advanceCarFailure = error => ({
  type: TYPES_ADVANCE_CAR.ADVANCE_CAR_FAILURE,
  payload: error,
});