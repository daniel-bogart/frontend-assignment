import React from 'react';
import MovieIndexItem from './movie_index_item';
import './movie.css'

const MovieIndex = (props) => {
  return (
    <div className="movie-index-wrapper">
      <ul className="movie-index">
        {props.showMovies.map((movie, idx) => {
          const poster = movie.poster_path;
          return (
            <li className="movie-index-item" key={idx}>
              <MovieIndexItem movie={movie} poster={poster} key={idx}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default MovieIndex;