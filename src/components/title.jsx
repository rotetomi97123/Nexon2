import React from "react";
import "../global.scss";

const title = () => {
  return (
    <div>
      <div className="title-Wrapper">
        <h1 className="title">AZ AJÁNDÉK KÖZÖS</h1>
      </div>
      <div className="title-text-wrap">
        <button>Döntsünk róla együtt</button>
        <p>
          A szánkópályán minden beosztás 250 ezer forintot jelent.Húzza a
          szánkókat aszerint ahogyan Ön osztaná el az adományt az alapitványok
          között.A kiválasztott arányokat vegül egyesitjük,s ennek megfelelően
          osztjuk szét a felajánlott összeget a négy szervezet között. Miután
          végzett, az "Elküldöm" gombra kattintva véglegesitse döntését.
        </p>
      </div>
    </div>
  );
};

export default title;
