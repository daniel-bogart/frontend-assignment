import React from 'react';
import MovieIndexItem from './movie_index_item';
import { MovieContainer, MovieIndexList, MovieIndexListItem, Border, Header, MovieWrapper } from './movie_styles';


const MovieIndex = (props) => {
  return (
    <MovieWrapper>
      <MovieContainer>
        <Border/>
        <Header>{props.indexHeader}</Header>
        <MovieIndexList>
          {props.showMovies.map((movie, idx) => { // mapping the array of movies onto an index and giving each 'item' a unique key
            return (
              <MovieIndexListItem className="movie-index-item" key={idx}>
                <MovieIndexItem movie={movie} key={idx}/>
              </MovieIndexListItem>
            )
          })}
        </MovieIndexList>
      </MovieContainer>
    </MovieWrapper>
  );
};

export default MovieIndex;