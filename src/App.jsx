import React, { useEffect, useState } from "react";
import Title from "./components/title";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Submit from "./components/Submit";
import "./global.scss";

const App = () => {
  const [position, setPosition] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);

  return (
    <div className="Wrapper">
      <div className="Content">
        <Title />
        <div className="slider-wrapper">
          <Slider position={position} setPosition={setPosition} />
          <Slider2 position2={position2} setPosition2={setPosition2} />
          <Slider3 position3={position3} setPosition3={setPosition3} />
          <Slider4 position4={position4} setPosition4={setPosition4} />
        </div>
        <Submit
          setPosition={setPosition}
          setPosition2={setPosition2}
          setPosition3={setPosition3}
          setPosition4={setPosition4}
        />
      </div>
    </div>
  );
};

export default App;
