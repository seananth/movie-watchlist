import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie }) => {
  return (
    <div className="flex">
      <button
        value="1"
        className="rounded-b font-bold w-1/3 p-2 bg-white hover:text-amber-400 hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        value="1"
        className="rounded-b hover:rounded-l-none font-bold w-2/3 p-2 bg-white hover:bg-red-800 hover:text-white hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} /> Add
      </button>
    </div>
  );
};
