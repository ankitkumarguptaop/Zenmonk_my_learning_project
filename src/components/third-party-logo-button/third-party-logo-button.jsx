import React from "react";
import "./third-party-logo-button.css";

const Thirdpartysignin = ({ type, image, sign }) => {
  return (
    <div className="signin-btn">
      <button>
        <img src={image} alt="" /> {sign} with {type}{" "}
      </button>
    </div>
  );
};

export default Thirdpartysignin;
