
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlayer } from "../redux/actions/PlayerActions";


  const FormCreatePlayer = () => {
    const initialPlayerState = {
      playerId: "4",
      name: "sebas",
      firstPlace: 0,
      secondPlace:0,
      thirdPlace:0,
      carId: "2"
    };
    const [player, setPlayer] = useState(initialPlayerState);
    const [submitted, setSubmitted] = useState(false);
  
    const dispatch = useDispatch();
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setPlayer({ ...player, [name]: value });
    };
  
    const savePlayer = () => {
      const { playerId, name, firstPlace, secondPlace, thirdPlace, carId } = player;
  
      dispatch(createPlayer(playerId, name, firstPlace, secondPlace, thirdPlace, carId))
        .then(data => {
          setPlayer({
            playerId: data.playerId,
            name: data.name,
            firstPlace: data.firstPlace,
            secondPlace:data.secondPlace,
            thirdPlace:data.thirdPlace,
            carId: data.carId
         
          });
          setSubmitted(true);
  
          console.log(data);
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
          <label htmlFor="title">Player Id</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={player.playerId}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Name</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={player.name}
            onChange={handleInputChange}
            name="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">firstPlace</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={player.firstPlace}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">secondPlace</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={player.secondPlace}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">thirdPlace</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={player.thirdPlace}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">carId</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
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


