import React from 'react'

import "./Artist.css"

const Artist = (props) => {
  return (
    <div className='artistCard'>
      <img className='artistImage' src= {props.artistImage}/>
      <p className='artistName'>{props.artistName}</p>
      <p className='artist-type'>Artista</p>
    </div>
  )
}

export default Artist