import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container } from "../components/Container";
//components
import { Navbar } from "../components/Navbar";
import { MovieListSection } from "../components/MovieListSection";

export const Watchlist = () => {
  const { watchlist, favorites } = useContext(GlobalContext);

  return (
    <div>
      <Navbar />
      <Container>
        <MovieListSection list={watchlist} title="Your Watchlist" />
        <MovieListSection list={favorites} title="Your Favorites" />
      </Container>
    </div>
  );
};
