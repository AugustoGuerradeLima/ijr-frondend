import React from 'react'

import AlbumDisc from "../../images/album.svg";
import HeartDefault from "../../images/heart-default.svg";
import Logout from "../../images/logout.svg";

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h1>iSpotify ®</h1>
      <p className='artist-button'>
        <img className='AD' src={AlbumDisc} alt="album disc" />
        <img className='AD' src={HeartDefault} alt="album disc" />
        <img className='AD' src={Logout} alt="album disc" />
        Artistas
      </p>
    </div>
  )
}

export default Navbar