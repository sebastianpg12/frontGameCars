import { TYPES_CREATE_PODIUM, TYPES_LOAD_PODIUM } from "../../actions/types";

const intialState = {
    podium: [],
    message: "",
};

export const podiumReducer = (state = intialState, {type, payload}) =>{
    switch (type){
        case TYPES_CREATE_PODIUM.CREATE_PODIUM: { return state; }
    
        case TYPES_CREATE_PODIUM.CREATE_PODIUM_SUCCESS: {
            const aux = state.podium;
            aux.push(payload);
            return { ...state, podium: aux };
        }
            
        case TYPES_CREATE_PODIUM.CREATE_PODIUM_FAILURE: { return { ...state, message: payload }; }

        case TYPES_LOAD_PODIUM.LOADING_PODIUM: { return state; }

        case TYPES_LOAD_PODIUM.LOAD_PODIUM_SUCCESS: { return { ...state, podium: payload }; } 
            
        case TYPES_LOAD_PODIUM.LOAD_PODIUM_FAILURE: { return { ...state, message: payload }; }  
            
        default: { return state; }
    }
};