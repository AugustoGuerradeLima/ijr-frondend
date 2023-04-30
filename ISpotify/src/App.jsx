import { useState, useEffect } from 'react'

import "./App.css";
import Playlist from './pages/Playlist/Playlist';
import FavMusics from './pages/FavMusics/FavMusics';

function App() {

  return (
    <div className="App">
      <Playlist />
      {/* <FavMusics /> */}
    </div>
  );
}

export default App;
