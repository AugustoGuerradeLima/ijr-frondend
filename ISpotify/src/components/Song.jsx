import React from "react";
import TrashIcon from "../images/trash.svg";
import HeartIcon from "../images/heart.svg";

<<<<<<< HEAD
import './Song.css'

export const Song = (props) => {
=======
const Song = (props) => {
>>>>>>> fb22d9fbb24c9842b4bbd7894da3f755767baf08
  return (
    <div className="container">
      <div className="song">
        <span>{props.number}</span>
        <p className="song-name">{props.songName}</p>
        <p className="artist-name">{props.artistName}</p>
        <p className="album-name">{props.albumName}</p>
        <div className="icons">
          <p className="heart-icon">
            <img src={HeartIcon} alt="like button" />
          </p>
          <p className="trash-icon">
            <img src={TrashIcon} alt="delete button" />
          </p>
        </div>
      </div>
    </div>
  );
};


export default Song