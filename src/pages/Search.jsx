import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { MovieCard } from "../components/MovieCard";
import { MovieListSection } from "../components/MovieListSection";

export const Search = () => {
  const [popular, setPopular] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setPopular(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);

    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
        .then((res) => {
          setSearchResult(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
        <MovieListSection list={searchResult} title="" />
        <MovieListSection list={popular} title="Popular Movies" />
      </Container>
    </div>
  );
};
