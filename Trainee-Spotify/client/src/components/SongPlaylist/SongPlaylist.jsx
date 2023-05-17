import React from "react";
import { useState, useEffect } from "react";
import TrashIcon from "../../images/trash.svg";
import HeartIconUnliked from "../../images/heart-unliked.svg";
import HeartIconLiked from "../../images/heart-liked.svg";

import './SongPlaylist.css'

const SongPlaylist = ({ number, songName, artistName, albumName, removeSong }) => {

  const [likeHeart, setLikeHeart] = useState(false)

  const handleLikeHeart = () => {
    if (likeHeart == false) {
      setLikeHeart(true)
    } else {
      setLikeHeart(false)
    }
  }

  useEffect(() => {
    const likedMusics = JSON.parse(localStorage.getItem("favmusics"))

    if (likedMusics) {
      likedMusics.map((songs) => {
        if (songs.songName === songName && songs.artistName === artistName) {
          setLikeHeart(true)
        }
      })
    }

  }, [])

  const handleLikeMusic = () => {

    const favMusics = JSON.parse(localStorage.getItem("favmusics")) || []

    const music = { songName, artistName, albumName }

    if (likeHeart == false) {
      favMusics.push(music)
      localStorage.setItem("favmusics", JSON.stringify(favMusics))
      setLikeHeart(true)
    } else {
      const index = favMusics.map(music => music.songName).indexOf(music.songName)
      favMusics.splice(index, 1)
      localStorage.setItem("favmusics", JSON.stringify(favMusics))
      setLikeHeart(false)
    }
  }

  return (
    <div className="song-playlist-container">
      <div className="song">
        <div className="info">
          <span>{number}</span>
          <div className="name">
            <p className="song-name">{songName}</p>
            <p className="artist-name">{artistName}</p>
          </div>
          <p className="album-name">{albumName}</p>
        </div>
        <div className="icons">
          {!likeHeart ?
            (<p className="heart-icon">
              <img src={HeartIconUnliked} alt="unlike button" id={likeHeart} onClick={handleLikeMusic} />
            </p>) :
            (<p className="heart-icon">
              <img src={HeartIconLiked} alt="like button" id={likeHeart} onClick={handleLikeMusic} />
            </p>)}

          <p className="trash-icon" onClick={() => removeSong()}>
            <img src={TrashIcon} alt="delete button" id="trash-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongPlaylist
