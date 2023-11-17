import React, { useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

const Submit = () => {
  const { state, dispatch } = useAppContext();

  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycby2JyE9B5QRgWhEB8tjCKdnVLIiIyJmE-HWCcUwg77N42LfTT9h7s4i9VRg2pv9IlS3Jg/exec",
      {
        method: "POST",
        body: formData,
      }
    );
  }
  const [resultState, setResultState] = useState(0);
  useEffect(() => {
    // Check if all four states are equal to 0
    if (
      state.shelf1 === 0 &&
      state.shelf2 === 0 &&
      state.shelf3 === 0 &&
      state.shelf4 === 0
    ) {
      // If true, set the resultState to 0
      setResultState(0);
    } else {
      // If false, update the resultState with some other logic if needed
      setResultState(1);
    }
  }, [state.shelf1, state.shelf2, state.shelf3, state.shelf4]);
  return (
    <div>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input
          value="LÁMPÁS ’92 KÖZHASZNÚ ALAPÍTVÁNY"
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
          value="AUTIZMUS ALAPÍTVÁNY"
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
        <button className="back-btn">Visszaállitás</button>
        <input
          type="submit"
          className="send-btn"
          value="Elküldés"
          style={{
            background: resultState === 1 ? "green" : "white",
            color: resultState === 1 ? "white" : "black",
          }}
        />
      </form>
    </div>
  );
};

export default Submit;
