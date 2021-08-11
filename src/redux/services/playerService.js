import http from "../../enviroment/AXIOS_CONFIG";

const create = data => {
  return http.post("/create/player", data);
};

const playerService = {
  create,
};

export default playerService;