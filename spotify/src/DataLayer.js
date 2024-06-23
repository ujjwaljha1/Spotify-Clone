import React, { createContext, useContext, useReducer } from "react";

// Create the DataLayer context
export const DataLayerContext = createContext();

// DataLayerProvider component
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Custom hook to access the DataLayer values
export const useDataLayerValue = () => useContext(DataLayerContext);

/*
This code sets up a context and provider for a global state management solution using React's Context API and useReducer hook. 
The DataLayerContext is created to hold the global state. The DataLayer component acts as a provider, initializing the state with 
an initial state and a reducer, and makes the state and dispatch function available to any child component wrapped by this provider. 
The custom hook, useDataLayerValue, simplifies accessing the context values (state and dispatch) in any component that needs it, 
allowing components to read from and dispatch actions to the global state managed by the reducer.
*/
