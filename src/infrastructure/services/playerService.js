import http from "../../enviroment/AXIOS_CONFIG";

const create = data => {
  return http.post("/create/player", data);
};

const getPlayerById = player => {
  return http.get('/get/player/by/id/' + player.id)
}

const playerService = {
  create,
  getPlayerById
};

const service = {
  playerService,
}
export default service;