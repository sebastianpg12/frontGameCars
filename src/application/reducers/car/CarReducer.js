import { TYPES_CREATE_CAR, TYPES_LOAD_CARS } from "../../actions/types";

const initialState = {
    car: [],
    message: "",
};

export const carReducer = (state = initialState, {type, payload}) => {
    switch (type){

        case TYPES_CREATE_CAR.CREATE_CAR:
            return state;

        case TYPES_CREATE_CAR.CREATE_CAR_SUCCESS:
            const aux = state.car;
            aux.push(payload);
            return { ...state, car: aux };    

        
        case TYPES_CREATE_CAR.CREATE_CAR_FAILURE:
            return { ...state, message: payload };  
        
        case TYPES_LOAD_CARS.LOADING_CAR:
            return state;   
            
        case TYPES_LOAD_CARS.LOAD_CAR_SUCCESS:
            return { ...state, car: payload };    

        case TYPES_LOAD_CARS.LOAD_CAR_FAILURE:
            return { ...state, message: payload };    
                
            default:
                    return state;
    }
};