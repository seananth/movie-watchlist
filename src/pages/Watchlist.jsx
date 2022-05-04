import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container } from "../components/Container";
//components
import { Navbar } from "../components/Navbar";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
  const { watchlist, favorites } = useContext(GlobalContext);

  return (
    <div>
      <Navbar />
      <Container>
        <section id="Watchlist" className="py-4">
          <p className="font-bold text-2xl">Your Watchlist</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {watchlist.length > 0
              ? watchlist.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              : null}
          </div>
        </section>
        <section id="Watchlist" className="py-4">
          <p className="font-bold text-2xl">Your Favorites</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {favorites.length > 0
              ? favorites.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              : null}
          </div>
        </section>
      </Container>
    </div>
  );
};
