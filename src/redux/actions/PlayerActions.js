import {
    CREATE_PLAYER,
  } from "./types";
  
  import PlayerDataService from "../services/playerService";
  
  export const createPlayer= (playerId, name, firstPlace, secondPlace, thirdPlace, carId) => async (dispatch) => {
    try {
      const res = await PlayerDataService.create({playerId, name, firstPlace, secondPlace, thirdPlace, carId});
  
      dispatch({
        type: CREATE_PLAYER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
 