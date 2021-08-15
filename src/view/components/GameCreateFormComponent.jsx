import React, { useState } from "react";
import { Input } from "./InputComponent";
import { Button } from "./ButtonComponent";
import { useDispatch } from "react-redux";
import { createGame } from "../../application/actions/GameActions";
import { toApiTrackMapper } from "../../infrastructure/mappers/to-api-track.mapper"

export const GameCreateForm = () => {
  const dispatch = useDispatch();

  const [game, setGame] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  };

  const saveGame = () => {
    const data = toApiTrackMapper(game);
    dispatch(createGame(data));
  }

  return (
    <>
      <div className="game-create-form">
        <Input 
          handleOnChange={handleOnChange} 
          name="trackDistance"
          placeholder="Ingresa un número"
          title="Kilómetros de la pista"
          type="number"
        />
        <Button handleOnClick={saveGame} label="Crear juego" />
      </div>
    </>
  );
}
