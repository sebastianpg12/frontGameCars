import {
    CREATE_PLAYER,

  } from "../actions/types";

  const intialState = {
    players: [],
  };
  
  export const playerReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case CREATE_PLAYER:
        return { ...state, players: payload };
      default:
        return state;
    }
  };
  
  
  export default playerReducer;