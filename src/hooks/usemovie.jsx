import { useState } from "react";
import { movies } from "../utils/movies";
import { useSelector } from "react-redux";

export let usemovie = () => {
    const { search } = useSelector(
  (state) => state.movie
);

console.log(search);

  const searchMovie =
    search.trim() === ""
      ? []
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase()),
        );

  return {
   
    searchMovie,
  };
};
