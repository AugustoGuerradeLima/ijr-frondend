import { useState, useEffect, createRef } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./App.css";
import Playlist from "./pages/Playlist/Playlist";
import FavArtists from "./pages/FavArtists/FavArtists";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <div className="App">
      {/* <Playlist /> */}
      {/* <FavArtists /> */}
      {/* <Login /> */}

      <Cadastro />
    </div>
  );
}

export default App;
