import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie }) => {
  const { addToWatchlist, watchlist } = useContext(GlobalContext);

  let alreadyOnWatchlist = watchlist.find(
    (watchlistItem) => watchlistItem.id === movie.id
  );
  const buttonSwitch = alreadyOnWatchlist ? false : true;

  return (
    <div className="flex">
      <button className="rounded-b font-bold w-1/3 p-2 bg-white hover:text-amber-400 hover:cursor-pointer">
        <FontAwesomeIcon icon={faStar} />
      </button>

      {buttonSwitch ? (
        <button
          className="rounded-b hover:rounded-l-none font-bold w-2/3 p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
          onClick={() => addToWatchlist(movie)}
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      ) : (
        <button
          className="rounded-b hover:rounded-l-none font-bold w-2/3 p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
          // onClick={() => addToWatchlist(movie)}
        >
          <FontAwesomeIcon icon={faTrash} /> Remove
        </button>
      )}
    </div>
  );
};
