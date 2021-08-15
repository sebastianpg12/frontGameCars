import React from "react";

export const Button = ({ handleOnClick, label, modifiers, disabled }) => {
  return (
    <>
      <button className={`button ${modifiers}`} onClick={handleOnClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
}
