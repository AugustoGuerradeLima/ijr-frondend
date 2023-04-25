import React from "react";
import AlbumCover from "../images/albumcover.png";

import './Playlist.css'

const Playlist = (props) => {
  return (
    <div className="playlist-container">
      <div className="album-cover">
        <p className="album">
          <img src={AlbumCover} alt="album cover" />
        </p>
      </div>
      <div className="top-info">
        <p className="playlist">Playlist</p>
        <h1 className="daily-mix">{props.name}</h1>
        <div className="more-info">
          <p>{props.nrtists}</p>
          <p>Spotify - {props.numberOfSongs} músicas</p>
          <p className="duration">{props.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Playlist
