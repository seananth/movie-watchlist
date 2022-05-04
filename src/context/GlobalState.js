import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//todo add to and check local storage

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
  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const addToFavorites = (movie) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: movie });
  };
  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };
  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        favorites: state.favorites,
        addToWatchlist,
        addToFavorites,
        removeFromWatchlist,
        removeFromFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
