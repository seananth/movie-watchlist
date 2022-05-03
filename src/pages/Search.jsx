import React, { useState } from "react";
import axios from "axios";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";

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
        <div className="flex justify-center">
          <div className="flex flex-col">
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            {searchResult.length > 0
              ? searchResult.map((result) => (
                  <p key={result.id}>{result.title}</p>
                ))
              : null}
          </div>
        </div>
      </Container>
    </div>
  );
};
