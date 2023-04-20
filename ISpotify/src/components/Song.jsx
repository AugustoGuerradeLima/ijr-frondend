import React from "react";
import TrashIcon from "../images/trash.svg";
import HeartIcon from "../images/heart.svg";

const Song = (props) => {
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