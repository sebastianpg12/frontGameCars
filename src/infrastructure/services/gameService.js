import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";

export const gameService = {
  create: data => http.post(RESOURCE_URL.createGame, data),
}