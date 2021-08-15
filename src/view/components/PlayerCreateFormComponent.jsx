import React, { useState } from "react";
import { Input } from "./InputComponent";
import { Button } from "./ButtonComponent";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createPlayer } from "../../application/actions/PlayerActions";
import { toApiPlayerMapper } from "../../infrastructure/mappers/to-api-player.mapper"

const PlayerCreateForm = ({ gameId }) => {
  const dispatch = useDispatch();

  const [player, setPlayer] = useState();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  const savePlayer = () => {
    const data = toApiPlayerMapper(player, gameId);
    dispatch(createPlayer(data));
  }

  return (
    <>
      <div className="game-create-form">
        <Input 
          handleOnChange={handleOnChange} 
          name="name"
          placeholder="Sebastián Garces"
          title="Nombre del jugador"
          type="text"
        />
        <Button handleOnClick={savePlayer} label="Crear jugador"/>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  gameId: state.gameReducer.game?.[0]?.gameId,
});

export default connect(mapStateToProps)(PlayerCreateForm);