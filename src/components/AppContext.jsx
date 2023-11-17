import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  shelf1: [0],
  shelf2: [0],
  shelf3: [0],
  shelf4: [0],
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM1":
      return { ...state, shelf1: [action.payload] };
    case "ADD_ITEM2":
      return { ...state, shelf2: [action.payload] };
    case "ADD_ITEM3":
      return { ...state, shelf3: [action.payload] };
    case "ADD_ITEM4":
      return { ...state, shelf4: [action.payload] };
    case "REMOVE-ITEM":
      const updatedSweaters = state.sweaters.map((item) =>
        item === action.payload ? { ...item, removed: false } : item
      );

      return {
        ...state,
        sweaters: updatedSweaters,
      };
    default:
      return state;
  }
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
