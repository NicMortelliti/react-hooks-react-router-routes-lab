import React from "react";
import { directors } from "../data";

function Directors() {
  const directorArray = directors.map((director) => {
    return (
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie) => <li key={movie}>{movie}</li> )}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorArray}
    </div>
  );
}

export default Directors;
