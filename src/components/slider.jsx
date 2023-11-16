import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { FaInfo } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import "../global.scss";

const slider = () => {
  const { state, dispatch } = useAppContext();
  const [sliderVal, setSliderVal] = useState(0);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const numberOfSpots = 11; // Updated to include 0
  const wrapperWidth = 950;
  const spotInterval = wrapperWidth / (numberOfSpots - 1);
  const spots = Array.from(
    { length: numberOfSpots },
    (_, index) => index * spotInterval
  );

  const calculateSliderValue = (position) => {
    const nearestSpot = spots.reduce((prev, curr) =>
      Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev
    );

    // Map the nearest spot to a value from 0 to 10
    const value = spots.indexOf(nearestSpot);
    return value;
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Adjust the position based on mouse movement
      const newPosition = e.clientX - e.target.getBoundingClientRect().left;
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      // Snap the slider to the nearest spot
      const nearestSpot = spots.reduce((prev, curr) =>
        Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev
      );
      setPosition(nearestSpot);

      setIsDragging(false);

      // Map the nearest spot to a value from 0 to 10
      const sliderValue = calculateSliderValue(nearestSpot);
      setSliderVal(sliderValue);

      // Log the slider value
    }
    dispatch({ type: "ADD_ITEM1", payload: sliderVal * 250000 });
    console.log(state.shelf1);
  };

  return (
    <div
      className="slider-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="lines">
        {spots.map((spot) => (
          <div key={spot} className="line" style={{ left: `${spot}px` }}></div>
        ))}
      </div>
      <img
        src="https://i.ibb.co/N1xnRft/Sz-nk-cs-szk-k.png"
        alt="Circle"
        className="slider-image"
        style={{ left: `${position}px` }}
      />
      <div className="price-wrap">
        <p>{sliderVal * 250000}Ft</p>
      </div>
      <div className="cloud">
        <img src="https://i.ibb.co/8jVs5SS/Vector-4.png" />
        <p>Autizmus alapitvány</p>
        <div className="info">
          <FaInfo />
        </div>
        <div className="link">
          <FiLink />
        </div>
      </div>
    </div>
  );
};

export default slider;
