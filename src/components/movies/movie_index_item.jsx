import React from 'react';
import { Poster, Title, Rating } from './movie_styles';
import ModalComponent from '../modal/modal_component';
import Modal from "../../utils/modal";
import placeHolder from '../../images/placeholder-image.png';

const MovieIndexItem = (props) => {

  const {title, vote_average, poster_path} = props.movie;
  const image = poster_path === null ? placeHolder : `https://image.tmdb.org/t/p/original/${poster_path}`; // displays a placeholder image if poster_path === null
  const { toggle, showModal } = Modal();
  return (
    <div className="poster-container" onClick={toggle}>
      <Rating>{vote_average}</Rating>
      <Poster
        src={image}
        alt="movie-image"
      />
      <Title>{title}</Title>
      <ModalComponent toggle={toggle} showModal={showModal} movie={props.movie}></ModalComponent> {/* the toggle will trigger the modal function in util to either display or not when clicked */}
    </div>
  );
};

export default MovieIndexItem;