import React from 'react';
import { Poster, Title, Rating } from './movie_styles';
import './movie.css';
import ModalComponent from '../modal/modal_component';
import Modal from "../../utils/modal";

const MovieIndexItem = (props) => {

  const { toggle, showModal } = Modal();
  const {title, vote_average, poster_path} = props.movie;
  return (
    <div className="poster-container" onClick={toggle}>
      <Rating>{vote_average}</Rating>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie-image"
      />
      <Title>{title}</Title>
      <ModalComponent toggle={toggle} showModal={showModal} movie={props.movie}></ModalComponent>
    </div>
  );
};

export default MovieIndexItem;