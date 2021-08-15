import { v4 as uuid } from "uuid";

export const toApiPlayerMapper = (data, gameId) => {
    const playerId = uuid();
    return {
        playerId,
        driverId: playerId,
        name: data.name,
        firstPlace: 0,
        secondPlace: 0,
        thirdPlace: 0,
        gameId,
    }
};