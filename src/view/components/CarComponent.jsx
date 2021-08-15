import React from "react";
import carImage from "../images/car.png";
import track from "../images/track.png";

export const Car = ({ car, advance }) => {
  const style = {
    right: advance
  }
  return (
    <>
      <div className="car">
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
