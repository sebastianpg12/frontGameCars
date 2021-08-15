import React from "react";

export const Input = ({ handleOnChange, name, placeholder, title, type, value }) => {
  return (
    <>
      <div className="input">
        <h4 className="input__title">{title}</h4>
        <input 
          type={type}
          className="input__input"
          required
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
        />
      </div>
    </>
  );
}
