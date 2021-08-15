import player from './player/player';
import car from './car/car';
import driver from './driver/driver';
import game from './game/game';
import podium from './podium/podium';
import rail from './rail/rail';
import track from './track/track';

const middleware = [
    ...player,
    ...car,
    ...driver,
    ...game,
    ...podium,
    ...rail,
    ...track,
]

export default middleware;