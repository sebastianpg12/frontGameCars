import React from "react";

export const Alert = ({ title, content }) => {
  return (
    <>
      <div className="alert">
        <h2 className="alert__title">{title}</h2>
        <p className="alert__content">{content}</p>
      </div>
    </>
  );
};
