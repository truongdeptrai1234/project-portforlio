import React from "react";

function Progress({ color = "#228be6", value = 1, max = 15, currentScore }) {
  const fillStyle = {
    width: `${(value / max) * 100}%`,
    backgroundColor: color,
    height: "100%",
    borderRadius: "10px",
  };
  return (
    <div className="progress">
      <div className="progress__bar">
        <div style={fillStyle}></div>
      </div>
      <div className="progress__text">
        <span>
          questions {value}/{max}
        </span>
        <span>{currentScore}/280 point</span>
      </div>
    </div>
  );
}

export default Progress;
