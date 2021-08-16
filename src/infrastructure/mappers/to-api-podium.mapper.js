export const toApiPodiumMapper = ({ podiumId, gameId }) => ({
  podiumId,
  firstPlace: "",
  secondPlace: "",
  thirdPlace: "",
  gameId,
  isFull: false,
});

export const toApiFillPodiumMapper = ({ cars, podium }) => {  
  if (podium.isFull) { return podium; }
  cars.forEach(car => {
    if (car.goal && podium.firstPlace === "") {
      podium.firstPlace = car.namePlayer;
    } else if (car.goal && podium.secondPlace === "" && podium.firstPlace !== car.namePlayer) {
      podium.secondPlace = car.namePlayer;
    } else if (car.goal && podium.thirdPlace === ""  && podium.secondPlace !== car.namePlayer && podium.firstPlace !== car.namePlayer) {
      podium.thirdPlace = car.namePlayer;
    } else if (podium.firstPlace !== "" && podium.secondPlace !== "" && podium.thirdPlace !== "") { 
      podium.isFull = true; 
    }
  });

  return podium;
}