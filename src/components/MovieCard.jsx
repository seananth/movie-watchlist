import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const MovieCard = ({ movie }) => {
  const [activeFavorite, setActiveFavorite] = useState(false);
  return (
    <div className="border rounded-lg shadow hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title + " " + movie.release_date + " movie poster"}
          className="rounded-t-lg w-full"
        />

        <p className="text-white font-bold absolute top-2 left-2 bg-amber-400 p-1 rounded">
          {movie.vote_average}/10
        </p>
        <div
          className={`absolute top-2 right-2 py-1 px-2 rounded-lg bg-snakeBlue hover:scale-110 cursor-pointer ${
            activeFavorite ? "text-amber-400" : "text-white"
          }`}
        >
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className="flex">
        <button
          value="1"
          className="rounded-b font-bold w-full p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
        >
          <span>
            <FontAwesomeIcon icon={faPlus} /> Add
          </span>
        </button>
      </div>
    </div>
  );
};
