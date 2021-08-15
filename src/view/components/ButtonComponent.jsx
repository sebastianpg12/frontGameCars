import React from "react";

export const Button = ({ handleOnClick, label }) => {
  return (
    <>
      <button className="button" onClick={handleOnClick}>
        {label}
      </button>
    </>
  );
}
