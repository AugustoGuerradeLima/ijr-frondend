import { useState, useEffect } from 'react'

import DownloadIcon from "./images/download.svg";
import HeartIconUnliked from "./images/heart.svg";
import HeartIconLiked from "./images/heart-v2.svg";
import PlayButton from "./images/playButton.png";
import ThreeDots from "./images/threeDots.png";
import ClockIcon from "./images/clock.svg";

import "./App.css";
import Playlist from "./components/Playlist"
import Song from "./components/Song"

function App() {

  const [songs, setSongs] = useState([
    {
      id: 1,
      songName: "The Zephyr Song",
      artistName: "Red Hot Chili Peppers",
      albumName: "By the way",
    },
    {
      id: 2,
      songName: "Talk",
      artistName: "Coldplay",
      albumName: "X&Y",
    },
    {
      id: 3,
      songName: "Cidade Negra",
      artistName: "Firmamento",
      albumName: "Cidade Negra Acústico MTV",
    }
  ])

  const removeSong = (id) => {
    const updatedSongs = songs.filter((song) => song.id !== id)
    setSongs(updatedSongs)
  }

  const [likeHeart, setLikeHeart] = useState(false)

  const handleLikeHeart = () => {
    if (likeHeart == false) {
      setLikeHeart(true)
    } else {
      setLikeHeart(false)
    }

  }

  return (
    <div className="App">
      <Playlist
        name="Daily Mix 1"
        artists="Red Hot Chili Peppers, Coldplay e mais"
        numberOfSongs="50"
        duration="1h 7min"
      />

      <div className="buttons-line">
        <p className="play-button">
          <img className='PB' src={PlayButton} alt="play button" />
        </p>
        {!likeHeart ?
          (<p className="heart-button">
            <img className='HB' src={HeartIconUnliked} alt="unlike button" id={likeHeart} onClick={handleLikeHeart} />
          </p>) :
          (<p className="heart-button">
            <img className='HB' src={HeartIconLiked} alt="like button" id={likeHeart} onClick={handleLikeHeart} />
          </p>)}
        <p className="download-button">
          <img className='DB' src={DownloadIcon} alt="download button" />
        </p>
        <p className="three-dots">
          <img className='TD' src={ThreeDots} alt="know more button" />
        </p>
      </div>

      <div className="songs-top-line">
        <p className='title'>#TÍTULO</p>
        <p className='album'>ÁLBUM</p>
        <p className="clock-icon">
          <img src={ClockIcon} alt="clock icon" />
        </p>
      </div>

      <hr />

      {songs.map(((song, index) => (
        <Song
          key={song.id}
          number={index + 1}
          songName={song.songName}
          artistName={song.artistName}
          albumName={song.albumName}
          removeSong={() => removeSong(song.id)}
        />
      )))}

    </div>
  );
}

export default App;
