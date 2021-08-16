import { 
  createCarFailure, 
  createCarSuccess, 
  loadingCars,
  loadingCarsFailure, 
  loadingCarsSuccess,
  advanceCarFailure,
  advanceCarSuccess,
} from "../../../application/actions/CarActions";
import { loadingPodium } from "../../../application/actions/PodiumActions";
import { TYPES_CREATE_CAR, TYPES_LOAD_CARS, TYPES_ADVANCE_CAR } from "../../../application/actions/types";  
import { fn } from "../../../infrastructure/utils/localStorage";

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

const loadCarsFlow = ({ carService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_LOAD_CARS.LOADING_CARS) {
      try {
        const cars = await carService.loadByGame(action.payload);
        dispatch(loadingCarsSuccess(cars.data));
        dispatch(loadingCars(fn.getFromLocal("GAME_ID")));
        dispatch(loadingPodium({ cars: cars.data, podiumId: fn.getFromLocal("PODIUM_ID")}));
      } catch (error) {
        dispatch(loadingCarsFailure(error.message));
      }
    }
  };

const advanceCarFlow = ({ carService }) => ({ dispatch }) => (next) =>
  async (action) => {
    next(action);
    if (action.type === TYPES_ADVANCE_CAR.ADVANCE_CAR) {
      try {
        const car = await carService.advance(action.payload.distance, action.payload.car);
        dispatch(advanceCarSuccess(car.data));
      } catch (error) {
        dispatch(advanceCarFailure(error.message));
      }
    }
  };

const carMiddleware = [addCarlow, loadCarsFlow, advanceCarFlow];

export default carMiddleware;