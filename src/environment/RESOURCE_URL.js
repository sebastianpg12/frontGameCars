export const RESOURCE_URL = { 
    createPlayer : `/player/create`,
    createCar: `/car/create`,
    createDriver: `/driver/create`,
    createGame: `/create/game`,
    createPodium: `/podium/create`,
    createLane: `/lane/create`,
    createTrack: `/create/track`,
    getPlayerByGame: gameId => `/players/game/${gameId}`,
    getPodiumById: podiumId => `/podium/${podiumId}`,
    getCarByGame: gameId => `/car/game/${gameId}`,
    advanceCar: (trackDistance) => `/car/advance/${trackDistance}`,
};
