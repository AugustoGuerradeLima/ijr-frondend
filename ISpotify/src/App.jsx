import { useState , useEffect} from 'react'

import DownloadIcon from "./images/download.svg";
import HeartIcon from "./images/heart.svg";
import PlayButton from "./images/playButton.png";
import ThreeDots from "./images/threeDots.png";
import ClockIcon from "./images/clock.svg";

import "./App.css";
import Playlist from "./components/Playlist"
import Song from "./components/Song"

function App() {

  const [songs,setSongs] = useState([
    {
      id:1,
      songName:"The Zephyr Song",
      artistName:"Red Hot Chili Peppers",
      albumName:"By the way",
    },
    {
      id:2,
      songName:"Talk",
      artistName:"Coldplay",
      albumName:"X&Y",
    }
  ])

  const removeSong = (id) =>{
    const updatedSongs = songs.filter((song)=>song.id !== id)
    setSongs(updatedSongs)
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
          <img src={PlayButton} alt="play button" />
        </p>
        <p className="heart-button">
          <img src={HeartIcon} alt="like button" />
        </p>
        <p className="download-button">
          <img src={DownloadIcon} alt="download button" />
        </p>
        <p className="three-dots">
          <img src={ThreeDots} alt="know more button" />
        </p>
      </div>

      <div className="songs-top-line">
        <p>#TÍTULO</p>
        <p>ÁLBUM</p>
        <p className="clock-icon">
          <img src={ClockIcon} alt="clock icon" />
        </p>
      </div>

      <hr />

      {songs.map(((song,index)=>(
        <Song
          key={song.id}
          number= {index+1}
          songName={song.songName}
          artistName={song.artistName}
          albumName={song.albumName}
          removeSong={()=>removeSong(song.id)}
        />
      )))}
      
    </div>
  );
}

export default App;
