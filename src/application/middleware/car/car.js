import {createCarFailure, createCarSucess} from "../../../application/actions/CarActions";
import { TYPES_CREATE_CAR } from "../../../application/actions/types";  


const addCarlow = ({ carService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_CREATE_CAR.CREATE_CAR) {
      try {
        const event = await carService.create(action.payload.data);
        dispatch(createCarSucess(event.data));
      } catch (error) {
        dispatch(createCarFailure(error.message));
      }
    }
  };

const carMiddleware = [addCarlow];

export default carMiddleware;