import React from 'react'
import { Link } from 'react-router-dom'

import "./Artist.css"

const Artist = (props) => {

  return (

    <Link to={`/artist/${props.artistId}`}>
      <div className='artistCard'>
      <img className='artistImage' src= {props.artistImage}/>
      <p className='artistName'>{props.artistName}</p>
      <p className='artist-type'>Artista</p>
    </div>
    </Link>
    
    
  )
}

export default Artist