import { TYPES_CREATE_LANE,  TYPES_LOAD_LANE } from "./types";

export const createLane = (data) => ({
  type: TYPES_CREATE_LANE.CREATE_LANE,
  payload: data,
});

export const createLaneSuccess = (event) => ({
  type: TYPES_CREATE_LANE.CREATE_LANE_SUCCESS,
  payload: event,
});

export const createLaneFailure = (messages) => ({
  type: TYPES_CREATE_LANE.CREATE_LANE_FAILURE,
  payload: messages,
});

export const loadingLanes = (id) => ({
  type: TYPES_LOAD_LANE.LOADING_LANE,
  payload: id,
});

export const loadingRailsSuccess = (rails) => ({
  type: TYPES_LOAD_LANE.LOAD_LANE_SUCCESS,
  payload: rails,
});

export const loadingRailsFailure = (error) => ({
  type: TYPES_LOAD_LANE.LOAD_LANE_FAILURE,
  payload: error,
});
