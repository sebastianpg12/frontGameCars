import React from "react";
import { Title } from "../components/TitleComponent";
import { Alert } from "../components/AlertComponent"
import { connect } from "react-redux";
import { Button } from "../components/ButtonComponent"
import { GameCreateForm } from "../components/GameCreateFormComponent";
import { useHistory } from 'react-router-dom';
import PlayerCreateForm from "../components/PlayerCreateFormComponent";

const Home = ({ gameId, playersCount }) => {
  const router = useHistory();

  const startGame = () => {
    router.push("/game");
  }

  return (
    <>
    {
      playersCount < 3 ? <Alert title="Jugadores insuficientes" content="Para poder jugar se necesitan minimo 3 jugadores"/> : null
    }
    
      <div className="container-section">
        {
          gameId === undefined ? 
            <>
              <Title title="Configurar juego" />
              <GameCreateForm />
            </> : 
            <>
              <Title title="Crear Jugadores" />
              <PlayerCreateForm />
            </>
        }

        { playersCount < 3 ? null : <Button handleOnClick={startGame} label="Iniciar Juego" modifiers="button--right"/> }
      </div>
    </>
  );
}


const mapStateToProps = state => ({
  gameId: state.gameReducer.game?.[0]?.gameId,
  playersCount: state.playerReducer.players.length,
});

export default connect(mapStateToProps)(Home);