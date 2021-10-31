import React from 'react';
import './modal.css';
import ReactDOM from 'react-dom';
import moment from 'moment';

const ModalComponent = (props) => {

  const { poster_path, title, vote_average, overview, release_date, vote_count} = props.movie;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return props.showModal ? ReactDOM.createPortal ( //  using ReactDOM to render the modal since it exists outside of the DOM hierarchy
    <div className="modal-background">  {/* Grey Modal Background */}
      <div className="modal-child" role="dialog" aria-modal="true"> {/* Modal itself */}
        <div className="modal-top">
          <div className="modal-title">{title}</div>
          <div className="close-x" onClick={props.toggle}></div>
        </div>

        <div className="modal-items">
          <img className="modal-poster" src={poster}/>
          <div className="modal-info" style={{'font-size': '18px'}}>
            <p className="release-date">
              <strong style={{'font-weight': 'bold'}}>Release date:  </strong>
              {moment(release_date).format("LL")} {/* I looked this library up after making an awkward function. This is really neat */}
            </p>
            <p>{overview}</p>
            <p>
              <strong style={{'font-weight': 'bold'}}>{vote_average}</strong> / 10 ({vote_count} total votes)
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body // 'parent' container
  ) : null;
};

export default ModalComponent;