import React from 'react'

import DownloadIcon from "../../images/download.svg";
import HeartIconUnliked from "../../images/heart-unliked.svg";
import HeartIconLiked from "../../images/heart-liked.svg";
import PlayButton from "../../images/playButton.png";
import ThreeDots from "../../images/threeDots.png";
import ClockIcon from "../../images/clock.svg";
import FavMusicsImg from "../../images/favmusics-img.png";

import "./FavMusics.css"

import TopPlaylist from '../../components/TopPlaylist/TopPlaylist';
import SongPlaylist from '../../components/SongPlaylist/SongPlaylist';

const FavMusics = () => {
  return (
    <div className='favmusics-container'>
      <div className="favmusics-info">
        <img className='favmusics-img' src={FavMusicsImg} alt=''></img>
        <div className='favmusics-title'>
          <p>PLAYLIST</p>
          <h1 className='favmusics-name'>Músicas curtidas</h1>
        </div>
      </div>
      <div className="favmusics-buttons">
        <p className="play-button">
          <img className='PB' src={PlayButton} alt="play button" />
        </p>
        <p className="download-button">
          <img className='DB' src={DownloadIcon} alt="download button" />
        </p>
      </div>
      <div className="songs-top-line">
        <p className='title'>#TÍTULO</p>
        <p className='genre'>Gênero</p>
        <p className="clock-icon">
          <img src={ClockIcon} alt="clock icon" />
        </p>
      </div>

      <hr />

    </div>
  )
}

export default FavMusics