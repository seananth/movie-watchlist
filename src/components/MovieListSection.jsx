import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieListSection = ({ list, title }) => {
  return (
    <section id={title} className="py-4">
      <p className="font-bold text-2xl pb-2">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {list.length > 0
          ? list.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          : null}
      </div>
    </section>
  );
};
