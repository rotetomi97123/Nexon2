import React, { useEffect, useState } from "react";
import { useAppContext } from "./components/AppContext";
import Title from "./components/title";
import "./global.scss";

const Data = () => {
  const { state, dispatch } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const [numbersArray, setNumbersArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbzD2wFpjvwWXB0-WCr3raqvjzrIdW8WdTl54shGchQfuZS3m2FjIl3zfXsNL4OTLJ5N4Q/exec";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setNumbersArray(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Wrapper">
      <div className="Content">
        <Title />
        <div className="data-itemWrapper">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>AUTIZMUS ALAPÍTVÁNY</th>
                  <th>LÁMPÁS ’92 KÖZHASZNÚ ALAPÍTVÁNY</th>
                  <th>NOÉ ÁLLATOTTHON KÖZHASZNÚ ALAPÍTVÁNY</th>
                  <th>SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="loading-cell">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  numbersArray.data &&
                  [1].map((row) => (
                    <tr key={row}>
                      <td>Összes</td>
                      <td>{numbersArray.data.sumB}FT</td>
                      <td>{numbersArray.data.sumD}FT</td>
                      <td>{numbersArray.data.sumF}FT</td>
                      <td>{numbersArray.data.sumH}FT</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <table className="bottomTable">
              <thead>
                <tr>
                  <th></th>
                  <th>AUTIZMUS ALAPÍTVÁNY</th>
                  <th>LÁMPÁS ’92 KÖZHASZNÚ ALAPÍTVÁNY</th>
                  <th>NOÉ ÁLLATOTTHON KÖZHASZNÚ ALAPÍTVÁNY</th>
                  <th>SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="loading-cell">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  numbersArray.result &&
                  [
                    ...Array(
                      Math.max(
                        numbersArray.result.columnB?.length,
                        numbersArray.result.columnD?.length,
                        numbersArray.result.columnF?.length,
                        numbersArray.result.columnH?.length
                      )
                    ),
                  ].map((_, index) => (
                    <tr key={index}>
                      <td></td>
                      <td>{numbersArray.result.columnB?.[index]}FT</td>
                      <td>{numbersArray.result.columnD?.[index]}FT</td>
                      <td>{numbersArray.result.columnF?.[index]}FT</td>
                      <td>{numbersArray.result.columnH?.[index]}FT</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
