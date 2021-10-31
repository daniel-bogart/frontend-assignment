import React from 'react';
import { Modal } from '../../utils/modal';
import moment from 'moment';
import ReactDOM from 'react-dom';
import './modal.css';

const ModalComponent = (props) => {
  const { poster_path, title, voter_average, release_date, vote_count} = props.movie;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return props.showModal ? ReactDOM.createPortal (
    <div className="modal-background">
      <div className="modal-child" role="dialog" aria-modal="true">
        <div className="modal-top">
          <div className="modal-title">{title}</div>
          <div className="close-x" onClick={props.toggle}></div>
        </div>
        
        <div className="modal-items">
          <img className="modal-poster" src={poster}/>
          <div className="modal-info">
            bloob
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;
};

export default ModalComponent;