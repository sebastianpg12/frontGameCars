import React from "react";
import { Title } from "../components/TitleComponent";
import { Car } from "../components/CarComponent";
import { connect } from "react-redux";

const Game = ({ gameId, cars }) => {

  return (
    <>
      <div className="container-section">
        <Title title="Juego de carros" />
        <Car advance="88%"/>
        <Car advance="87%"/>
        <Car advance="86%"/>
        <Car advance="85%"/>
        <Car advance="84%"/>
        <Car advance="83%"/>
        <Car advance="82%"/>
        <Car advance="81%"/>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  gameId: state.gameReducer.game?.[0]?.gameId,
  cars: state.carReducer.cars,
});

export default connect(mapStateToProps)(Game);  