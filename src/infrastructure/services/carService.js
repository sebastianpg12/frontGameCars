import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";

export const carService = {
  create: data => http.post(RESOURCE_URL.createCar, data),
  loadByGame: gameId => http.get(RESOURCE_URL.getCarByGame(gameId)),
  advance: (distance, data) => http.put(RESOURCE_URL.advanceCar(distance), data),
}