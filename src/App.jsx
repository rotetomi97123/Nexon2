import React from "react";
import Title from "./components/title";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import "./global.scss";

const App = () => {
  return (
    <div className="Wrapper">
      <div className="Content">
        <Title />
        <div className="slider-wrapper">
          <Slider />
          <Slider2 />
          <Slider3 />
          <Slider4 />
        </div>
      </div>
    </div>
  );
};

export default App;
