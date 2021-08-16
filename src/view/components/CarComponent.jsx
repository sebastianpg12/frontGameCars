import React from "react";
import carImage from "../images/car.png";
import track from "../images/track.png";
import { useDispatch } from "react-redux";
import { advanceCar } from "../../application/actions/CarActions";

export const Car = ({ car, distance }) => {
  const dispatch = useDispatch();

  const style = {
    right: `${car.currentPosition}%`
  }

    if (!car.goal) { 
      dispatch(advanceCar({distance, car}));
    }

  return (
    <>
      <div className="car">
        <h2 className="car__title">{car.namePlayer}</h2>
        <figure className="car__image-track">
            <img src={track} alt="track"></img>
        </figure>
        <figure className="car__image-car" style={style}>
            <img src={carImage} alt="car"></img>
        </figure>
      </div>
    </>
  );
};
