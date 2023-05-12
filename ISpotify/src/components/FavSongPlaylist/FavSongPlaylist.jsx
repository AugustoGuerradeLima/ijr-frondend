import React from 'react'

const FavSongPlaylist = () => {
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

          <p className="trash-icon" onClick={() => removeSong()}>
            <img src={TrashIcon} alt="delete button" id="trash-icon" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default FavSongPlaylist