import React, { useEffect, useState } from "react";
import { useAppContext } from "./AppContext";
import { Link } from "react-router-dom";

const Submit = ({ setPosition, setPosition2, setPosition3, setPosition4 }) => {
  const { state, dispatch } = useAppContext();
  const [isSend, setIsSend] = useState(false);
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzD2wFpjvwWXB0-WCr3raqvjzrIdW8WdTl54shGchQfuZS3m2FjIl3zfXsNL4OTLJ5N4Q/exec",
      {
        method: "POST",
        body: formData,
      }
    );
  }
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("");
  const [active, setActive] = useState(false);
  useEffect(() => {
    const allArraysEmptyOrZeros =
      state.shelf1.every((value) => value === 0) &&
      state.shelf2.every((value) => value === 0) &&
      state.shelf3.every((value) => value === 0) &&
      state.shelf4.every((value) => value === 0);

    if (allArraysEmptyOrZeros) {
      setButtonBackgroundColor("grey");
      setActive(false);
    } else {
      setButtonBackgroundColor("#14a351");
      setActive(true);
    }
  }, [state.shelf1, state.shelf2, state.shelf3, state.shelf4]);

  const restart = () => {
    setPosition(0);
    setPosition2(0);
    setPosition3(0);
    setPosition4(0);
    dispatch({ type: "ADD_ITEM1", payload: 0 });
    dispatch({ type: "ADD_ITEM2", payload: 0 });
    dispatch({ type: "ADD_ITEM3", payload: 0 });
    dispatch({ type: "ADD_ITEM4", payload: 0 });
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input
          value="AUTIZMUS ALAPÍTVÁNY"
          name="Name1"
          type="text"
          readOnly
          className="form-input"
        />
        <input
          value={state.shelf1}
          name="Price1"
          type="number"
          readOnly
          className="form-input"
        />
        <input
          value="LÁMPÁS ’92 KÖZHASZNÚ ALAPÍTVÁNY"
          name="Name2"
          type="text"
          readOnly
          className="form-input"
        />
        <input
          value={state.shelf2}
          name="Price2"
          type="number"
          readOnly
          className="form-input"
        />
        <input
          value="NOÉ ÁLLATOTTHON KÖZHASZNÚ ALAPÍTVÁNY"
          name="Name3"
          type="text"
          readOnly
          className="form-input"
        />
        <input
          value={state.shelf3}
          name="Price3"
          type="number"
          readOnly
          className="form-input"
        />
        <input
          value="SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY"
          name="Name4"
          type="text"
          readOnly
          className="form-input"
        />
        <input
          value={state.shelf4}
          name="Price4"
          type="number"
          readOnly
          className="form-input"
        />
        <button className="back-btn" onClick={restart}>
          Visszaállitás
        </button>
        <input
          type="submit"
          className="send-btn"
          value="Elküldés"
          disabled={!active}
          style={{
            backgroundColor: buttonBackgroundColor,
            pointerEvents: active ? "all" : "none",
          }}
          onClick={() => setIsSend(true)}
        />
        {isSend && (
          <Link to={"/Data"}>
            <input className="send-btn" type="button" value="Tovább" />
          </Link>
        )}
      </form>
    </div>
  );
};

export default Submit;
