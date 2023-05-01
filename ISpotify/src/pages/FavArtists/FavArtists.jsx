import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Artists from '../../components/Artists/Artists'



import "./FavArtists.css"

const FavArtists = () => {
  return (
    <div className='fav-artists-container'>
      <Navbar />
      <div className='artist-section'>
      <h2>Artistas</h2>
      <Artists />
      </div>
    </div>
  )
}

export default FavArtists