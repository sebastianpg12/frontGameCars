export const toApiCarMapper = (carId, laneId, gameId) => ({
  id: carId,
  goal: false,
  currentPosition: 0,
  advance: 0,
  gameId,
  laneId,
});
