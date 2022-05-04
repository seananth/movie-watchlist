import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { MovieListSection } from "../components/MovieListSection";

export const Search = () => {
  const [popular, setPopular] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env

  //get popular movies on start

  useEffect(() => {
    const initData = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          )
          .then((res) => {
            setPopular(res.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    };
    initData();
  }, []);

  //
  useEffect(() => {
    if (searchQuery !== "") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
          )
          .then((res) => {
            setSearchResult(res.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQuery]);

  //Debounce to minimize api calls
  const updateQuery = (e) => setSearchQuery(e?.target?.value);
  const debouncedOnChange = debounce(updateQuery, 400);

  return (
    <div className="bg-slate-800">
      <Navbar />
      <Container>
        <SearchBar
          debouncedOnChange={debouncedOnChange}
          searchQuery={searchQuery}
        />
        <MovieListSection list={searchResult} title="" />
        <MovieListSection list={popular} title="Popular Movies" />
      </Container>
    </div>
  );
};
