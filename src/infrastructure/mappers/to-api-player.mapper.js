import { v4 as uuid } from "uuid";

export const toApiPlayerMapper = (data, gameId) => ({
    playerId: uuid(),
    driverId: uuid(),
    name: data.name,
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    gameId,
});