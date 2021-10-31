import React from 'react';
import MovieIndexItem from './movie_index_item';
import { MovieContainer, MovieIndexList, MovieIndexListItem, Border, Header } from './movie_styles';


const MovieIndex = (props) => {
  return (
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
  );
};

export default MovieIndex;