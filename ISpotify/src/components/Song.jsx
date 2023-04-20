import React from "react";
import { useState } from "react";
import TrashIcon from "../images/trash.svg";
import HeartIconUnliked from "../images/heart.svg";
import HeartIconLiked from "../images/heart-v2.svg";

import './Song.css'

const Song = ({ number, songName, artistName, albumName, removeSong }) => {

  const [likeHeart, setLikeHeart] = useState(false)

  const handleLikeHeart = () => {
    if (likeHeart == false) {
      setLikeHeart(true)
    } else {
      setLikeHeart(false)
    }

  }

  return (
    <div className="container">
      <div className="song">
        <span>{number}</span>
        <p className="song-name">{songName}</p>
        <p className="artist-name">{artistName}</p>
        <p className="album-name">{albumName}</p>
        <div className="icons">
          {!likeHeart ?
            (<p className="heart-icon">
              <img src={HeartIconUnliked} alt="unlike button" id={likeHeart} onClick={handleLikeHeart} />
            </p>) :
            (<p className="heart-icon">
              <img src={HeartIconLiked} alt="like button" id={likeHeart} onClick={handleLikeHeart} />
            </p>)}

          <p className="trash-icon" onClick={() => removeSong()}>
            <img src={TrashIcon} alt="delete button" id="trash-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Song