export const toApiCarMapper = ({ carId, laneId, gameId, driverId, namePlayer }) => ({
  carId,
  goal: false,
  currentPosition: 90,
  advance: 0,
  gameId,
  laneId,
  driverId,
  namePlayer,
});
