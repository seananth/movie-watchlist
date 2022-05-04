import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  watchlist: [],
  favorites: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const AddToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        favorites: state.favorites,
        AddToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
