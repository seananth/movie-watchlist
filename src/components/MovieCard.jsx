import React from "react";
import { MovieCardOverlay } from "./MovieCardOverlay";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie }) => {
  return (
    <div>
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
          <MovieCardOverlay movie={movie} />
        </div>
        <MovieControls movie={movie} />
      </div>
    </div>
  );
};
