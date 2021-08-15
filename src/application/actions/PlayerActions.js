import { TYPES_CREATE_PLAYER, TYPES_LOAD_PLAYERS } from "./types";

export const createPlayer = (data) => ({
  type: TYPES_CREATE_PLAYER.CREATE_PLAYER,
  payload: data,
});

export const createPlayerSucces = (event) => ({
  type: TYPES_CREATE_PLAYER.CREATE_PLAYER_SUCCESS,
  payload: event,
});

export const createPlayerFailure = (messages) => ({
  type: TYPES_CREATE_PLAYER.CREATE_PLAYER_FAILURE,
  payload: messages,
});

export const loadingPlayers = (id) => ({
  type: TYPES_LOAD_PLAYERS.LOADIND_PLAYERS,
  payload: id,
});

export const loadingPlayersSuccess = (players) => ({
  type: TYPES_LOAD_PLAYERS.LOAD_PLAYERS_SUCCESS,
  payload: players,
});

export const loadingPlayersFailure = (error) => ({
  type: TYPES_LOAD_PLAYERS.LOAD_PLAYERS_FAILURE,
  payload: error,
});
