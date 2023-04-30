import React from 'react'

import "./Artist.css"

const Artist = (props) => {
  return (
    <div>
      <p>{props.artistName}</p>
      <p>{props.artistType}</p>
    </div>
  )
}

export default Artist