import React from "react";
import AlbumCover from "../images/albumcover.png";

import './TopPlaylist.css'

const TopPlaylist = (props) => {
  return (
    <div className="top-playlist-container">
      <div className="album-cover">
        <p className="album">
          <img src={AlbumCover} alt="album cover" />
        </p>
      </div>
      <div className="top-info">
        <p className="playlist">Playlist</p>
        <h1 className="daily-mix">{props.name}</h1>
        <div className="more-info">
          <p>{props.artists}</p>
          <div className="number-songs-hours">
            <p>Spotify - {props.numberOfSongs} músicas</p>
            <p className="duration">{props.duration}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopPlaylist
