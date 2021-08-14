import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PlayerDataService from "../../infrastructure/services/playerService";
import { v4 as uuidv4 } from "uuid";
import { createPlayer } from "../../application/actions/PlayerActions";

const FormCreatePlayer = () => {
  const initialPlayerState = {
    playerId: uuidv4(),
    name: "",
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    carId: uuidv4(),
    gameId: uuidv4(),
    driverId: uuidv4(),
  };
  const [player, setPlayer] = useState(initialPlayerState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  const savePlayer = () => {
    var data = {
      playerId: player.playerId,
      name: player.name,
      firstPlace: player.firstPlace,
      secondPlace: player.secondPlace,
      thirdPlace: player.thirdPlace,
      carId: player.carId,
      driverId: player.carId,
      gameId: player.gameId,
      };


      dispatch(createPlayer({
        data
      }))
  };

  const newPlayer = () => {
    setPlayer(initialPlayerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPlayer}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="playerId">Player Id</label>
            <input
              type="text"
              className="form-control"
              id="playerId"
              disabled
              value={uuidv4()}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={player.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstPlace">firstPlace</label>
            <input
              type="text"
              className="form-control"
              id="firstPlace"
              required
              value={player.firstPlace}
              onChange={handleInputChange}
              name="firstPlace"
            />
          </div>

          <div className="form-group">
            <label htmlFor="secondPlace">secondPlace</label>
            <input
              type="text"
              className="form-control"
              id="secondPlace"
              required
              value={player.secondPlace}
              onChange={handleInputChange}
              name="secondPlace"
            />
          </div>

          <div className="form-group">
            <label htmlFor="thirdPlace">thirdPlace</label>
            <input
              type="text"
              className="form-control"
              id="thirdPlace"
              required
              value={player.thirdPlace}
              onChange={handleInputChange}
              name="thirdPlace"
            />
          </div>

          <div className="form-group">
            <label htmlFor="carId">carId</label>
            <input
              type="text"
              className="form-control"
              id="carId"
              disabled
              value={player.carId}
              onChange={handleInputChange}
              name="title"
            />
          </div>  

          <div className="form-group">
            <label htmlFor="gameId">gameId</label>
            <input
              type="text"
              className="form-control"
              id="gameId"
              disabled
              value={player.gameId}
              onChange={handleInputChange}
              name="gameId"
            />
          </div>

          <div className="form-group">
            <label htmlFor="driverId">driverId</label>
            <input
              type="text"
              className="form-control"
              id="driverId"
              disabled
              value={player.driverId}
              onChange={handleInputChange}
              name="driverId"
            />
          </div>


          <button onClick={savePlayer} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormCreatePlayer;
