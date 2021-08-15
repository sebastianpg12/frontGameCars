
import { TYPES_CREATE_DRIVER } from "../../actions/types";

const intialState = {
  driver: [],
  message: "",
};

export const driverReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case TYPES_CREATE_DRIVER.CREATE_DRIVER:
    return state;

    case TYPES_CREATE_DRIVER.CREATE_DRIVER_SUCCES:
    const aux = state.player;
    aux.push(payload);
    return { ...state, driver: aux };

    case TYPES_CREATE_DRIVER.CREATE_DRIVER_FAILURE:
    return { ...state, message: payload};

    default:
    return state;
  }
};
