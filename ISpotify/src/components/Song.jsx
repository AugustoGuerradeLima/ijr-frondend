import React from "react";
import TrashIcon from "../images/trash.svg";
import HeartIcon from "../images/heart.svg";

import './Song.css'

const Song = ({number,songName,artistName,albumName,removeSong}) => {

  return (
    <div className="container">
      <div className="song">
        <span>{number}</span>
        <p className="song-name">{songName}</p>
        <p className="artist-name">{artistName}</p>
        <p className="album-name">{albumName}</p>
        <div className="icons">
          <p className="heart-icon">
            <img src={HeartIcon} alt="like button" id="like-button"/>
          </p>
          <p className="trash-icon" onClick={()=>removeSong()}>
            <img src={TrashIcon} alt="delete button" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Song