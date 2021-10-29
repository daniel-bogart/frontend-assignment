import React from 'react';
import './movie.css'

const MovieIndexItem = (props) => {
  return (
    <div>
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/original/${props.poster}`}
        alt="movie-image"
      />
    </div>
  );
};

export default MovieIndexItem;