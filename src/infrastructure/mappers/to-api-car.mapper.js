export const toApiCarMapper = ({ carId, laneId, gameId, driverId }) => ({
  carId,
  goal: false,
  currentPosition: 0,
  advance: 0,
  gameId,
  laneId,
  driverId,
});
