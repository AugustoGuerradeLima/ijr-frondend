import React from "react";

import AlbumDisc from "../../images/album.svg";
import HeartDefault from "../../images/heart-default.svg";
import Logout from "../../images/logout.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">iSpotify ®</h1>

      <div className="artistas-musicas">
        <img className="AD" src={AlbumDisc} alt="album disc" />
        <h4>Artistas</h4>
      </div>

      <div className="artistas-musicas">
        <img className="AD" src={HeartDefault} alt="album disc" />
        <h4>Músicas Curtidas</h4>
      </div>

      <div className="logout">
        <img className="AD" src={Logout} alt="album disc" />
        <h4>Logout</h4>
      </div>
    </div>
  );
};

export default Navbar;
