import { TYPES_CREATE_RAIL, TYPES_LOAD_RAILS } from "../../actions/types";

const intialState = {
  rail: [],
  message: "",
};

export const railReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case TYPES_CREATE_RAIL.CREATE_RAIL:
      return state;

    case TYPES_CREATE_RAIL.CREATE_RAIL_SUCCESS:
      const aux = state.rail;
      aux.push(payload);
      return { ...state, rail: aux };

    case TYPES_CREATE_RAIL.CREATE_RAIL_FAILURE:
      return { ...state, message: payload };

    case TYPES_LOAD_RAILS.LOADING_RAILS:
      return state;

    case TYPES_LOAD_RAILS.LOAD_RAILS_SUCCESS:
      return { ...state, players: payload };

    case TYPES_LOAD_RAILS.LOAD_RAILS_FAILURE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
