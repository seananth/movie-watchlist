import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <div className="bg-red-800">
      <Container>
        <div className="flex justify-between py-2">
          <Link to="/">Logo</Link>
          <div>
            <Link className="mr-4" to="/">Search</Link>
            <Link to="/watchlist">Watchlist</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
