import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import DownloadIcon from "../../images/download.svg";
import HeartIconUnliked from "../../images/heart-unliked.svg";
import HeartIconLiked from "../../images/heart-liked.svg";
import PlayButton from "../../images/playButton.png";
import ThreeDots from "../../images/threeDots.png";
import ClockIcon from "../../images/clock.svg";

import "./ArtistAlbum.css"

const ArtistAlbum = () => {

  const { id } = useParams()

  return (
    <div>
      ArtistAlbum
      <h1>{id}</h1>
    </div>
  )
}

export default ArtistAlbum