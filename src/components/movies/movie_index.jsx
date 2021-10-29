import React from 'react';
import MovieIndexItem from './movie_index_item';
import { MovieContainer, MovieIndexList, MovieIndexListItem } from './movie_styles';

const MovieIndex = (props) => {
  return (
    <MovieContainer>
      <MovieIndexList>
        {props.showMovies.map((movie, idx) => {
          const poster = movie.poster_path;
          return (
            <MovieIndexListItem className="movie-index-item" key={idx}>
              <MovieIndexItem movie={movie} poster={poster} key={idx}/>
            </MovieIndexListItem>
          )
        })}
      </MovieIndexList>
    </MovieContainer>
  );
};

export default MovieIndex;