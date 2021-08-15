import { TYPES_CREATE_RAIL, TYPES_LOAD_RAILS } from "./types";

export const createRail = (data) => ({
  type: TYPES_CREATE_RAIL.CREATE_RAIL,
  payload: data,
});

export const createRailSucces = (event) => ({
  type: TYPES_CREATE_RAIL.CREATE_RAIL_SUCCESS,
  payload: event,
});

export const createRailFailure = (messages) => ({
  type: TYPES_CREATE_RAIL.CREATE_RAIL_FAILURE,
  payload: messages,
});

export const loadingRailes = (id) => ({
  type: TYPES_LOAD_RAILS.LOADIND_RAILS,
  payload: id,
});

export const loadingRailsSuccess = (rails) => ({
  type: TYPES_LOAD_RAILS.LOAD_RAILS_SUCCESS,
  payload: rails,
});

export const loadingRailsFailure = (error) => ({
  type: TYPES_LOAD_RAILS.LOAD_RAILS_FAILURE,
  payload: error,
});
