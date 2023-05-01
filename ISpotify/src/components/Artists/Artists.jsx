import React from 'react'
import { useState, useEffect } from 'react'

import Artist from '../Artist/Artist'
import { api } from '../../api/api'
import { apiSpotify } from '../../api/api'

import "./Artists.css"

const Artists = () => {

  // const [artistsTEST, setArtistsTEST] = useState([
  //   {
  //     id: 1,
  //     artistName: "Engenheiros do Hawaii",
  //     Type: "Artista",
  //   },
  //   {
  //     id: 2,
  //     artistName: "Cidade Negra",
  //     Type: "Artista",
  //   },
  //   {
  //     id: 3,
  //     artistName: "Capital Inicial",
  //     Type: "Artista",
  //   }
  // ])

  const [artists, setArtists] = useState([])

  const getArtists = async () => {
    try {
      const response = await apiSpotify.get(
        `/artists?ids=53XhwfbYqKCa1cC15pYq2q,64KEffDW9EtZ1y2vBYgq8T,60d24wfXkVzDSfLS6hyCjZ,7vk5e3vY1uw9plTHJAMwjN,3z97WMRi731dCvKklIf2X6,6eUKZXaKkcviH0Ku9w2n3V,6XyY86QOPPrYVGvF9ch6wz,3YQKmKGau1PzlVlkL1iodx,0NGAZxHanS9e0iNHpR8f2W,7jVv8c5Fj3E9VhNjxT4snq`
      )

      const artistList = response?.data?.artists?.map((artists) => ({
        url: artists?.images[0]?.url,
        name: artists?.name,
        id: artists?.id,
        type: artists?.type
      }))

      setArtists(artistList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      await getArtists()
    })()
  }, [])

  return (
      <div className='artist-grid'>
      {artists.map(((artist) => (
        <Artist
          key={artist.id}
          artistImage={artist.url}
          artistName={artist.name}
          artistType={artist.type}
        />
      )))}
      </div>
  )
}

export default Artists