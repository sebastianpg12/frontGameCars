import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";


export const podiumService = {
  create: data => http.post(RESOURCE_URL.createPodium, data),
  loadById: podiumId => http.get(RESOURCE_URL.getPodiumById(podiumId)),
}