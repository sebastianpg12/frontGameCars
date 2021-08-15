import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";

export const carService = {
  create: data => http.post(RESOURCE_URL.createCar, data),
  loadByPlayer: (playerId) => http.get(RESOURCE_URL.getCarByPlayer),
}