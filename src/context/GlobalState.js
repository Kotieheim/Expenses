import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Dwog food", amount: -30 },
    { id: 2, text: "SugarMomma", amount: 1500 },
    { id: 3, text: "Tein", amount: -50 },
    { id: 4, text: "Candles", amount: -300 },
    { id: 5, text: "Decor", amount: -20 },
    { id: 6, text: "Sold Hair", amount: 120 }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
