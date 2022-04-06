import React from "react";
import { movies } from "../data";

function Movies() {
  const movieArray = movies.map((movie) => {
    return (
      <div>
        <h1>{movie.title}</h1>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map((genre) => <li>{genre}</li> )}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieArray}
    </div>
  );
}

export default Movies;
