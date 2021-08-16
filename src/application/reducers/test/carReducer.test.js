import reducer from "../../reducers/car/CarReducer";
import {
    createCar,
    createCarSuccess,
    createCarFailure,
    loadingCars,
    loadingCarsSuccess,
    loadingCarsFailure,
    advanceCar,
    advanceCarSuccess,
    advanceCarFailure
} from "../../actions/CarActions";

describe("Test reducer car functions", () => {
  const dummyCar = {
    id: "bedad5a7-e9c2-4a6d-8fae-285930f45475",
    goal: true,
    currentPosition: 90,
    advance: 2000,
    driverId: "e2a70fd0-de66-4025-89fd-8b207311a9dd",
    gameId: "2b2c518b-1df8-42c7-a652-03fc33451187",
    laneId: "c6267458-093a-4575-a05b-bfe0ab642b30",
    namePlayer: "jacobofarces",
  };

  const initialState = {
    car: {},
    cars: [],
    carAdvanced: {},
    message: "",
  };

  test("reducer CREATE_CAR case", () => {
    const action = createCar(dummyCar);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState });
  });

  test("reducer CREATE_CAR_SUCCESS case", () => {
    const action = createCarSuccess(dummyCar);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, car: dummyCar });
  });

  

});
