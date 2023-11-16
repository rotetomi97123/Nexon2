import React from "react";
import "../global.scss";

const Buttons = () => {
  return (
    <div className="button-wrapper">
      <button className="back-btn">Visszaállitás</button>
      <button className="send-btn">Elküldés</button>
    </div>
  );
};

export default Buttons;
