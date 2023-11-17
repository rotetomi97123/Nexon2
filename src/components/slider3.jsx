import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { FaInfo } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import "../global.scss";

const slider3 = ({ position3, setPosition3 }) => {
  const { state, dispatch } = useAppContext();
  const [sliderVal, setSliderVal] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

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
      setPosition3(newPosition);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      // Snap the slider to the nearest spot
      const nearestSpot = spots.reduce((prev, curr) =>
        Math.abs(curr - position3) < Math.abs(prev - position3) ? curr : prev
      );
      setPosition3(nearestSpot);
      const sliderValue = calculateSliderValue(nearestSpot);
      dispatch({ type: "ADD_ITEM3", payload: sliderValue * 250000 });
      setIsDragging(false);

      // Map the nearest spot to a value from 0 to 10
      setSliderVal(sliderValue);
      // Log the slider value
      console.log("Slider value:", sliderValue);
    }
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
        style={{ left: `${position3}px` }}
      />
      <div className="price-wrap">
        <p>{state.shelf3[0]}Ft</p>
      </div>
      <div className="cloud">
        <img src="https://i.ibb.co/Csxdhsh/Vector-6.png" />
        <p>NOÉ ÁLLATOTTHON ALAPITVÁNY</p>
        <div className="info" onClick={() => setInfoVisible(true)}>
          <FaInfo />
        </div>
        <div className="link">
          <FiLink />
        </div>
      </div>
      {infoVisible && (
        <div className="infoDiv">
          <div className="infoDiv-exit" onClick={() => setInfoVisible(false)}>
            <FaRegCircleXmark />
          </div>
          <h2>NOÉ ÁLLATOTTHON ALAPITVÁNY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
            quos rem eius voluptas, inventore quam architecto amet at animi a
            aliquid quasi autem aspernatur suscipit harum laborum saepe
            similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Itaque adipisci cum fugiat, voluptatibus iste possimus, eaque nam at
            dolorum, blanditiis non! Natus mollitia magni at veritatis quasi
            odio libero commodi. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore id iusto commodi dolorum quo fugit maxime,
            a laboriosam itaque, libero praesentium explicabo tenetur! Saepe
            neque necessitatibus soluta, molestias obcaecati cumque!
          </p>
        </div>
      )}
    </div>
  );
};

export default slider3;
