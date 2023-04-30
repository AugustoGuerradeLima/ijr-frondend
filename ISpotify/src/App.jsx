import { useState, useEffect } from 'react'

import "./App.css";
import Playlist from './pages/Playlist/Playlist';
import FavArtists from './pages/FavArtists/FavArtists';

function App() {

  return (
    <div className="App">
      {/* <Playlist /> */}
      <FavArtists />
    </div>
  );
}

export default App;
