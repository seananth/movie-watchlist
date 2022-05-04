import React from "react";

export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <section id="Search" className="flex flex-col items-center pt-4 text-white text-center">
      <p className="text-4xl font-bold">Explore movies</p>
      <p className="text-2xl mb-4 font-semibold">Find your favorites and plan your next move night!</p>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
        placeholder="Search movies.."
        className="border rounded shadow-md p-2 w-full lg:w-1/2 text-slate-900"
      />
    </section>
  );
};