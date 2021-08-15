import { createCarFailure, createCarSuccess, loadingCarFailure, loadingCarSuccess } from "../../../application/actions/CarActions";
import { TYPES_CREATE_CAR, TYPES_LOAD_CAR } from "../../../application/actions/types";  

const addCarlow = ({ carService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_CREATE_CAR.CREATE_CAR) {
      try {
        const event = await carService.create(action.payload.data);
        dispatch(createCarSuccess(event.data));
      } catch (error) {
        dispatch(createCarFailure(error.message));
      }
    }
  };

const loadCarFlow = ({ carService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_LOAD_CAR.LOADING_CAR) {
      try {
        const car = await carService.loadByPlayer(action.payload);
        dispatch(loadingCarSuccess(car.data));
      } catch (error) {
        dispatch(loadingCarFailure(error));
      }
    }
  };

const carMiddleware = [addCarlow, loadCarFlow];

export default carMiddleware;