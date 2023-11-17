import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Data from "./Data";

const routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </div>
  );
};

export default routing;
