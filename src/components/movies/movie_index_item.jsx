import React from 'react';
import { Poster, Title, Rating } from './movie_styles';
import './movie.css';

const MovieIndexItem = (props) => {
  const {title, vote_average, poster_path} = props.movie;
  return (
    <div className="poster-container">
      <Rating>{vote_average}</Rating>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie-image"
      />
      <Title>{title}</Title>
    </div>
  );
};

export default MovieIndexItem;