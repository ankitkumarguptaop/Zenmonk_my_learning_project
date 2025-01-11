import React from "react";
import "./input.css";

const Input = ({
  type,
  handleInput,
  placeHolder,
  value,
  error,
  errorMessage,
  required,
}) => {
  let name = "input-text";
  if (!error) {
    name = "input-text";
  } else {
    name = "input-error";
  }

  return (
    <>
      <input
        type={type}
        value={value}
        className={name}
        placeholder={placeHolder}
        required={required}
        onChange={(e) => handleInput(e)}
      />
      {error && <div className="error-message">{errorMessage}</div>}
    </>
  );
};

export default Input;
