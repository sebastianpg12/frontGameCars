import { TYPES_CREATE_CAR, TYPES_LOAD_CAR } from "../../actions/types";

const initialState = {
    cars: [],
    message: "",
};

export const carReducer = (state = initialState, {type, payload}) => {
    switch (type){

        case TYPES_CREATE_CAR.CREATE_CAR: { return state; }

        case TYPES_CREATE_CAR.CREATE_CAR_SUCCESS: {
            const aux = state.cars;
            aux.push(payload);
            return { ...state, cars: aux };
        }    
        
        case TYPES_CREATE_CAR.CREATE_CAR_FAILURE: { return { ...state, message: payload }; }
        
        case TYPES_LOAD_CAR.LOADING_CAR: { return state; }
            
        case TYPES_LOAD_CAR.LOAD_CAR_SUCCESS: { return { ...state, cars: payload }; }

        case TYPES_LOAD_CAR.LOAD_CAR_FAILURE: { return { ...state, message: payload }; }

        default: { return state; }
                    
    }
};