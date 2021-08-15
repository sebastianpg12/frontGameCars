import { TYPES_CREATE_GAME, TYPES_LOAD_GAME } from "./types";

export const createGame = (data) => ({
    type: TYPES_CREATE_GAME.CREATE_GAME,
    payload: data,
  });

  export const createGameSuccess = (event) => ({
    type: TYPES_CREATE_GAME.CREATE_GAME_SUCCESS,
    payload: event,
  });

  export const createGameFailure = (messages) => ({
    type: TYPES_CREATE_GAME.CREATE_GAME_FAILURE,
    payload: messages,
  });

  export const loadingGame = (id) => ({
    type: TYPES_LOAD_GAME.LOADING_GAMES,
    payload: id,
  });


  export const loadingGameSuccess = (players) => ({
    type: TYPES_LOAD_GAME.LOAD_GAME_SUCCESS,
    payload: players,
  });

  export const loadingGameFailure = (error) => ({
    type: TYPES_LOAD_GAME.LOAD_GAME_FAILURE,
    payload: error,
  });
