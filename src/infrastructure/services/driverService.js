import http from "../../environment/AXIOS_CONFIG";
import { RESOURCE_URL } from "../../environment/RESOURCE_URL";

export const driverService = {
  create: data => http.post(RESOURCE_URL.createDriver, data),
}