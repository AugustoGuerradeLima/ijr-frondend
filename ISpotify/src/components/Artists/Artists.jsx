import React from 'react'
import { useState, useEffect } from 'react'
import Artist from '../Artist/Artist'
import { api } from '../../api/api'
import { apiSpotify } from '../../api/api' 
import "./Artists.css"


const Artists = () => {

  const [artists, setArtists] = useState([
    {
      id: 1,
      artistName: "Engenheiros do Hawaii",
      Type: "Artista",
    },
    {
      id: 2,
      artistName: "Cidade Negra",
      Type: "Artista",
    },
    {
      id: 3,
      artistName: "Capital Inicial",
      Type: "Artista",
    }
  ])

  return (
    <div className='artist-container'>
      <h2>Artistas</h2>
        {artists.map(((artist, index) => (
        <Artist
          key={artist.id}
          number={index + 1}
          artistName={artist.artistName}
          artistType={artist.Type}
        />
      )))}
    </div>
  )
}

export default Artists