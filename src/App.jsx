import React, { useEffect } from "react";
import Title from "./components/title";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Buttons from "./components/Buttons";
import Submit from "./components/Submit";
import { useAppContext } from "./components/AppContext";
import "./global.scss";

const App = () => {
  const { state, dispatch } = useAppContext();

  // useEffect(() => {
  //   // This block of code will run whenever yourArray changes
  //   console.log("Context array changed:", state.shelf1);
  //   console.log("Context array changed:", state.shelf2);
  //   console.log("Context array changed:", state.shelf3);
  //   console.log("Context array changed:", state.shelf4);

  //   // You can perform additional actions here based on the changes
  // }, [state.shelf1, state.shelf2, state.shelf3, state.shelf4]);
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
        <Submit />
      </div>
    </div>
  );
};

export default App;
