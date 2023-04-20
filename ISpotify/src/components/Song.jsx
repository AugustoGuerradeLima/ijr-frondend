import React from "react";
import TrashIcon from "../images/trash.svg";
import HeartIcon from "../images/heart.svg";

import { useState } from "react";

import './Song.css'

const Song = (props) => {

  const [hide, setHide] = useState("")

  const handleHide = () => setHide("hide")

  return (
    <div className="container">
      <div className="song" id={hide}>
        <span>{props.number}</span>
        <p className="song-name">{props.songName}</p>
        <p className="artist-name">{props.artistName}</p>
        <p className="album-name">{props.albumName}</p>
        <div className="icons">
          <p className="heart-icon">
            <img src={HeartIcon} alt="like button" id="like-button"/>
          </p>
          <p className="trash-icon">
            <img src={TrashIcon} alt="delete button" id="delete-button" onClick={handleHide}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Song