import {
  CREATE_PLAYER,
  LOADIND_PLAYERS,
  CREATE_PLAYER_SUCCES,
  CREATE_PLAYER_FAILURE,
  PLAYERS_LOAD_SUCCES,
  GET_PLAYERS_FAILURE,
} from "../../application/actions/types";

const intialState = {
  player: [],
  message: "",
};
export const playerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return state;

    case CREATE_PLAYER_SUCCES:
      const aux = state.player;
      aux.push(payload);
      return { ...state, player: aux };

    case CREATE_PLAYER_FAILURE:
      return { ...state, message: payload };

    case LOADIND_PLAYERS:
      return state;

    case PLAYERS_LOAD_SUCCES:
      return { ...state, players: payload };

    case GET_PLAYERS_FAILURE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
