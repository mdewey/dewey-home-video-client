import React from 'react';
import { Movie } from '../../store';
import DisplayTags from './DisplayTags';

function MovieListItem(movie: Movie) {
  return (
    <div className="movie-card">
      <h2><a href={`/movie/${movie.id}`}>{movie.title}</a></h2>
      {/* <h3>{movie.length}</h3> */}
      <DisplayTags tags={movie.tags} />
    </div>
  );
}

export default MovieListItem;