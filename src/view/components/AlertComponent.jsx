import React from "react";

export const Alert = ({ title, content }) => {
  return (
    <>
      <div className="alert">
        <h3 className="alert__title">{title}</h3>
        <p className="alert__content">{content}</p>
      </div>
    </>
  );
};
