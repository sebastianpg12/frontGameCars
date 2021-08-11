import {
    CREATE_PLAYER,

  } from "../actions/types";
  
  const initialState = [];
  
  function playerReducer(players = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PLAYER:
        return [...players, payload];
  
    
      default:
        return players;
    }
  };
  
  export default playerReducer;