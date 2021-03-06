import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";

export const playerService = {
  create: data => http.post(RESOURCE_URL.createPlayer, data),
  load: gameId => http.get(RESOURCE_URL.getPlayerByGame(gameId)),
};
