import React, { useEffect } from "react";
import { Title } from "../components/TitleComponent";
import { Car } from "../components/CarComponent";
import { Button } from "../components/ButtonComponent";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { loadingCars } from "../../application/actions/CarActions";
import First from "../images/puesto1.png";
import Second from "../images/puesto2.png";
import Third from "../images/puesto3.png";

const Game = ({ gameId, cars, isGameFinished, isPodiumFull, trackDistance, podium }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingCars(gameId));
  },[dispatch, gameId]);

  const closeModal = () => {
    document.getElementById("modal").style.display="none";
  }

  return (
    <>
      {
        isPodiumFull ? (
          <div className="modal" id="modal">
            <div className="modal__content">
              <Title title="Podio" />
              <div className="moda__places">
                <div className="modal__second">
                  <h3 className="modal__winner">{podium.secondPlace}</h3>
                  <figure className="modal__img-second">
                    <img src={Second} alt="first"/>
                  </figure>
                </div>
                <div className="modal__first">
                  <h3 className="modal__winner">{podium.firstPlace}</h3>
                  <figure className="modal__img-first">
                    <img src={First} alt="first"/>
                  </figure>
                </div>
                <div className="modal__third">
                  <h3 className="modal__winner">{podium.thirdPlace}</h3>
                  <figure className="modal__img-third">
                    <img src={Third} alt="first"/>
                  </figure>
                </div>
              </div>
              <Button handleOnClick={closeModal} label="Cerrar" modifiers="button--center"/>
            </div>
          </div>
        ): null
      }

      <div className="container-section">
        <Title title="Juego de carros" />
        {cars?.map(car => (<Car car={car} key={car?.carId} distance={trackDistance} />))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  gameId: state?.gameReducer?.game?.gameId,
  isGameFinished: state?.gameReducer?.game?.isFinished,
  isPodiumFull: state?.podiumReducer?.podium?.isFull,
  trackDistance: state?.trackReducer?.track?.trackDistance,
  cars: state?.carReducer?.cars,
  podium: state?.podiumReducer?.podium
});

export default connect(mapStateToProps)(Game);  