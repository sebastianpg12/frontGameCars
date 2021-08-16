import { TYPES_CREATE_PLAYER, TYPES_LOAD_PLAYERS } from "../../actions/types";

const intialState = {
  player: [],
  players: [],
  message: "",
};

export const playerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case TYPES_CREATE_PLAYER.CREATE_PLAYER: { return state; }

    case TYPES_CREATE_PLAYER.CREATE_PLAYER_SUCCESS: { return { ...state, player: payload }; }

    case TYPES_CREATE_PLAYER.CREATE_PLAYER_FAILURE: { return { ...state, message: payload }; }

    case TYPES_LOAD_PLAYERS.LOADING_PLAYERS: { return state; }

    case TYPES_LOAD_PLAYERS.LOAD_PLAYERS_SUCCESS: { return { ...state, players: payload }; }

    case TYPES_LOAD_PLAYERS.LOAD_PLAYERS_FAILURE: { return { ...state, message: payload }; }

    default: { return state; }
  }
};
