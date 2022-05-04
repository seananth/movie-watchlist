import React from "react";

export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <section id="Search" className="flex justify-center py-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
        placeholder="Search movies.."
        className="border rounded p-2 w-full lg:w-1/2 my-1"
      />
    </section>
  );
};