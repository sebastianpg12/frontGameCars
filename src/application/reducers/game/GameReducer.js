import { TYPES_CREATE_GAME, TYPES_LOAD_GAME } from "../../actions/types";

const intialState = {
    game: [],
    message: "",
};

export const gameReducer = (state = intialState, {type, payload}) =>{
    switch (type){
        case TYPES_CREATE_GAME.CREATE_GAME: { return state; }
    
        case TYPES_CREATE_GAME.CREATE_GAME_SUCCESS: { return { ...state, game: payload }; }
            
        case TYPES_CREATE_GAME.CREATE_GAME_FAILURE: { return { ...state, message: payload }; }    

        case TYPES_LOAD_GAME.LOADING_GAME: { return state; }

        case TYPES_LOAD_GAME.LOAD_GAME_SUCCESS: { return { ...state, game: payload }; }
            
        case TYPES_LOAD_GAME.LOAD_GAME_FAILURE: { return { ...state, message: payload }; }  
            
        default: { return state; }
    }
};