import React from "react";
import "./candle.scss";

function Candle({ isOn }) {
  return (
    <div className="wrapper">
      <div className="center">
        <div className="candle">
          <div className={`candle-flame-${isOn ? "on" : "off"}`}></div>
          <div className="candle-wick"></div>
          <div className="candle-wax"></div>
          <div className="candle-stand"></div>
        </div>
      </div>
    </div>
  );
}

export default Candle;
