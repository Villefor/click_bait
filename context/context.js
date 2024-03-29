import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  token: null,
  links: [],
  values: null,
  name: null,
};

const actionTypes = {
  SET_TOKEN: "SET_TOKEN",
  SET_LINKS: "SET_LINKS",
  SET_VALUES: "SET_VALUES",
  SET_NAME: "SET_NAME",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case actionTypes.SET_LINKS:
      return { ...state, links: action.payload };
    case actionTypes.SET_VALUES:
      return { ...state, values: action.payload };  
    case actionTypes.SET_NAME:
      return { ...state, name: action.payload };  
      

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

export { AppProvider, useAppContext, actionTypes };
