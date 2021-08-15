import { TYPES_CREATE_LANE, TYPES_LOAD_LANE } from "../../actions/types";

const intialState = {
  lane: [],
  message: "",
};

export const laneReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case TYPES_CREATE_LANE.CREATE_LANE: { return state; }

    case TYPES_CREATE_LANE.CREATE_LANE_SUCCESS: { 
      const aux = state.lane;
      aux.push(payload);
      return { ...state, lane: aux };
    }

    case TYPES_CREATE_LANE.CREATE_LANE_FAILURE: { return { ...state, message: payload }; }

    case TYPES_LOAD_LANE.LOADING_LANE: { return state; }

    case TYPES_LOAD_LANE.LOAD_LANE_SUCCESS: { return { ...state, lane: payload }; }

    case TYPES_LOAD_LANE.LOAD_LANE_FAILURE: { return { ...state, message: payload }; }

    default: { return state; }
  }
};
