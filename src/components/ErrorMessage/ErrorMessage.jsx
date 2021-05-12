import React from "react";
import IconError from "./../IconError/IconError";
import "./ErrorMessage.scss";

function ErrorMessage({ errorText }) {
  return (
    <div className="error-message">
      <div className="error-message__icon">
        <IconError fill="#e6aa67" />
      </div>
      <p className="error-message__text">{errorText}</p>
    </div>
  );
}

export default ErrorMessage;
