import {
    CREATE_PLAYER,
    CREATE_PLAYER_SUCCES,
    CREATE_PLAYER_FAILURE,
    LOADIND_PLAYERS,
    PLAYERS_LOAD_SUCCES,
    GET_PLAYERS_FAILURE
  } from "./types";
  
  import PlayerDataService from "../../infrastructure/services/playerService";

  export const createPlayer = data => ({
    type: CREATE_PLAYER,
    payload: data,
  });

export const createPlayerSucces = event => ({
  type: CREATE_PLAYER_SUCCES,
  payload: event,
});

export const createPlayerFailure = messages => ({
  type: CREATE_PLAYER_FAILURE,
  payload: messages,
});

//GET
export const loadingPlayers = (id) =>({
  type: LOADIND_PLAYERS,
  payload:id
});

export const loadingOKRSuccess = (players) =>({
  type: PLAYERS_LOAD_SUCCES,
  payload: players
});

export const loadingOKRFailure = (error) =>({
  type: GET_PLAYERS_FAILURE,
  payload:error
})

  
 

  



 