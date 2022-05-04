import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <div className="bg-slate-900">
      <Container>
        <div className="flex justify-between py-2 text-white font-bold">
          <Link className="bg-white rounded px-1 text-black" to="/">
            Movie<span className="text-red-800">Watch</span>
          </Link>
          <div>
            <Link className="mr-4 hover:underline" to="/">
              Search
            </Link>
            <Link className="hover:underline" to="/watchlist">
              Watchlist
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
