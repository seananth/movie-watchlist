import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MovieCard } from "./components/MovieCard";

test("renders", () => {
  act(() => {
    render(
      <MovieCard
        movie={{
          adult: false,
          backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
          genre_ids: [80, 9648, 53],
          id: 414906,
          original_language: "en",
          original_title: "The Batman",
          overview:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          popularity: 6182.987,
          poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          release_date: "2022-03-01",
          title: "The Batman",
          video: false,
          vote_average: 7.8,
          vote_count: 4204,
        }}
      />
    );
  });
  expect(true);
});


