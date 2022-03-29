import { createContext, useContext, useReducer } from "react";

//Prepares the data for the state
export const StateContext = createContext();

//Wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull data out of the state
export const useStateValue = () => useContext(StateContext);
