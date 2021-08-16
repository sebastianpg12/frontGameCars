import { v4 as uuid } from "uuid";

export const toApiDriverMapper = (playerId, ) => ({
    driverId: playerId,
    laneId: uuid(),
    carId: uuid(),
    position: 0,
    playerId,
});


