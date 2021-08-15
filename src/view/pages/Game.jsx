import React, { useEffect } from "react";
import { Title } from "../components/TitleComponent";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { loadingPlayers } from "../../application/actions/PlayerActions";

const Game = ({ gameId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingPlayers(gameId));
  }, [dispatch, gameId]);

  return (
    <>
      <div className="container-section">
        <Title title="Juego de carros" />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  gameId: state.gameReducer.game?.[0]?.gameId,
});

export default connect(mapStateToProps)(Game);  