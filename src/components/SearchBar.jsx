import React from "react";

export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => handleSearch(e)}
      placeholder="Search movies.."
      className="border rounded p-2 w-full my-1"
    />
  );
};
