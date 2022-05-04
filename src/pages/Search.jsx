import React, { useState } from "react";
import axios from "axios";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { MovieCard } from "../components/MovieCard";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const API_KEY = "d0051e764e60b395b912da9a68a2327b";

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
        <section id="Search" className="flex justify-center py-4">
          <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
        </section>
        <section id="Movie Result" className="py-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {searchResult.length > 0
              ? searchResult.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              : null}
          </div>
        </section>
      </Container>
    </div>
  );
};
