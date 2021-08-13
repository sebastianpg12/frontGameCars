import {
    CREATE_PLAYER,

  } from "../actions/types";
  import { v4 as uuidv4 } from 'uuid';
  const intialState = {
    player: [{
      playerId: null,
      name: "",
      firstPlace: 0,
      secondPlace:0,
      thirdPlace:0,
      carId: null
    }],
  };
  
  export const playerReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case CREATE_PLAYER:
        return  { ...state, player: payload };;
      default:
        return state;
    }
  };
  


