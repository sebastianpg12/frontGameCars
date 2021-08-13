
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PlayerDataService from "../redux/services/playerService";
import { v4 as uuidv4 } from 'uuid';

  const FormCreatePlayer = () => {
    const initialPlayerState = {
      playerId: uuidv4(),
      name: "",
      firstPlace: 0,
      secondPlace:0,
      thirdPlace:0,
      carId: uuidv4()
    };
    const [player, setPlayer] = useState(initialPlayerState);
    const [submitted, setSubmitted] = useState(false);
  
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setPlayer({ ...player, [name]: value });
      
    };
    
    const savePlayer = () => {
      var data = {
        playerId: player.playerId,
            name: player.name,
            firstPlace: player.firstPlace,
            secondPlace:player.secondPlace,
            thirdPlace:player.thirdPlace,
            carId: player.carId
      };

  
  
      PlayerDataService.create(data)
      .then(response => {
        setPlayer({
          playerId: response.data.playerId,
          name: response.data.name,
          firstPlace: response.data.firstPlace,
          secondPlace:response.data.secondPlace,
          thirdPlace:response.data.thirdPlace,
          carId: response.data.carId
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
    const newPlayer= () => {
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

        <button onClick={savePlayer} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
    }


  export default FormCreatePlayer;


