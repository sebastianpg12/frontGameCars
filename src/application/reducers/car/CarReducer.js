import { TYPES_CREATE_CAR, TYPES_LOAD_CARS, TYPES_ADVANCE_CAR } from "../../actions/types";

const initialState = {
    car: {},
    cars: [],
    carAdvanced: {},
    message: "",
};

export const carReducer = (state = initialState, {type, payload}) => {
    switch (type){

        case TYPES_CREATE_CAR.CREATE_CAR: { return state; }

        case TYPES_CREATE_CAR.CREATE_CAR_SUCCESS: { return { ...state, car: payload }; }
        
        case TYPES_CREATE_CAR.CREATE_CAR_FAILURE: { return { ...state, message: payload }; }
        
        case TYPES_LOAD_CARS.LOADING_CARS: { return state; }
            
        case TYPES_LOAD_CARS.LOAD_CARS_SUCCESS: { return { ...state, cars: payload }; }

        case TYPES_LOAD_CARS.LOAD_CARS_FAILURE: { return { ...state, message: payload }; }

        case TYPES_ADVANCE_CAR.ADVANCE_CAR: { return state; }

        case TYPES_ADVANCE_CAR.ADVANCE_CAR_SUCCESS: { return { ...state, carAdvanced: payload }; }

        case TYPES_ADVANCE_CAR.ADVANCE_CAR_FAILURE: { return { ...state, message: payload }; }

        default: { return state; }
    }
};