// src/components/MoviesPage.js
import React from "react";
import Movie from "../Movie";
import movieStyles from "../Movie/Movie.module.css";
import { movies } from "../../Data/data";

const MoviesPage = () => (
  <div>
    <div className={movieStyles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default MoviesPage;
