import React from "react";
import { Title } from "../components/TitleComponent";
import { connect } from "react-redux";
import { GameCreateForm } from "../components/GameCreateFormComponent";
import PlayerCreateForm from "../components/PlayerCreateFormComponent";

const Home = ({ gameId }) => {
console.log(gameId);
  return (
    <>
      <div className="home">
        {
          gameId === undefined ? 
            <>
              <Title title="Configurar juego" />
              <GameCreateForm />
            </> : null
        }
        <Title title="Crear Jugadores" />
        <PlayerCreateForm />
      </div>
    </>
  );
}


const mapStateToProps = state => ({
  gameId: state.gameReducer.game?.[0]?.gameId,
});

export default connect(mapStateToProps)(Home);