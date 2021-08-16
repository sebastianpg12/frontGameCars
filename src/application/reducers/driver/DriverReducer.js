
import { TYPES_CREATE_DRIVER } from "../../actions/types";

const intialState = {
  driver: [],
  message: "",
};

export const driverReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case TYPES_CREATE_DRIVER.CREATE_DRIVER: { return state; }

    case TYPES_CREATE_DRIVER.CREATE_DRIVER_SUCCESS: {return { ...state, driver: payload };}

    case TYPES_CREATE_DRIVER.CREATE_DRIVER_FAILURE: { return { ...state, message: payload}; }

    default: { return state; }
  }
};
