import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie }) => {
  const {
    addToWatchlist,
    addToFavorites,
    removeFromWatchlist,
    watchlist,
    favorites,
  } = useContext(GlobalContext);

  //check if already on watchlist
  let alreadyOnWatchlist = watchlist.find(
    (watchlistItem) => watchlistItem.id === movie.id
  );
  const buttonSwitch = alreadyOnWatchlist ? true : false;

  //check if already on favorites list
  let alreadyOnFavorites = favorites.find(
    (favoritesItem) => favoritesItem.id === movie.id
  );
  const favoritesSwitch = alreadyOnFavorites ? true : false;

  return (
    <div className="flex">
      <button
        disabled={favoritesSwitch}
        className={`rounded-b font-bold w-1/3 p-2 bg-white hover:text-amber-400 hover:cursor-pointer ${
          favoritesSwitch ? "text-amber-400" : "text-black"
        }`}
        onClick={() => addToFavorites(movie)}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>

      {buttonSwitch ? (
        <button
          className="rounded-b hover:rounded-l-none font-bold w-2/3 p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
          onClick={() => removeFromWatchlist(movie.id)}
        >
          <FontAwesomeIcon icon={faTrash} /> Remove
        </button>
      ) : (
        <button
          className="rounded-b hover:rounded-l-none font-bold w-2/3 p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
          onClick={() => addToWatchlist(movie)}
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      )}
    </div>
  );
};
