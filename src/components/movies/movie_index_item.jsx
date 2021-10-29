import React from 'react';
import { Poster, Title } from './movie_styles';
import './movie.css';

const MovieIndexItem = (props) => {
  return (
    <div className="poster-container">
      <Poster
        src={`https://image.tmdb.org/t/p/original/${props.poster}`}
        alt="movie-image"
      />
      <Title>{props.movie.title}</Title>
    </div>
  );
};

export default MovieIndexItem;