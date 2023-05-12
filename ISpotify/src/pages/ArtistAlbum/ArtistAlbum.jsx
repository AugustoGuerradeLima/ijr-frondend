import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { api, apiSpotify } from '../../api/api';

import DownloadIcon from "../../images/download.svg";
import HeartIconUnliked from "../../images/heart-unliked.svg";
import HeartIconLiked from "../../images/heart-liked.svg";
import PlayButton from "../../images/playButton.png";
import ThreeDots from "../../images/threeDots.png";
import ClockIcon from "../../images/clock.svg";

import SongPlaylist from '../../components/SongPlaylist/SongPlaylist';
import Navbar from '../../components/Navbar/Navbar';

import "./ArtistAlbum.css"

const ArtistAlbum = () => {

  const { id } = useParams()

  const [artist, setArtist] = useState([])
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true);

  const [nameArtist, setNameArtist] = useState("")
  const [artistImgUrl, setArtistImgUrl] = useState("")

  const getArtistSongs = async () => {
    try {
      const responseArtist = await apiSpotify.get(`/artists/${id}`);
      const responseSong = await apiSpotify.get(`/artists/${id}/top-tracks?market=BR`)

      setArtist(responseArtist?.data)

      setNameArtist(responseArtist?.data?.name)

      const songList = responseSong?.data?.tracks?.map((song) => ({
        songName: song?.name,
        artistName: responseArtist?.data?.name,
        id: song?.id,
        songGenre: responseArtist?.data?.genres[0]
      }))

      setSongs(songList)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        await getArtistSongs();
        setLoading(false);
      }

    })()
  }, [id])

  const removeSong = (id) => {
    const updatedSongs = songs.filter((song) => song.id !== id)
    setSongs(updatedSongs)
  }

  const [likeHeart, setLikeHeart] = useState(false)

  const handleLikeHeart = () => {
    if (likeHeart == false) {
      setLikeHeart(true)
    } else {
      setLikeHeart(false)
    }
  }

  return (
    <div className='artist-album-container'>
      <Navbar/>
      {!loading && (
        <div className='content-container'>
          <div className='artist-info'>
            <img className='artist-img' src={artist?.images[0]?.url} alt=''></img>
            <div className='artist-title'>
              <p>ARTISTA</p>
              <h1 className='artist-name'>{artist?.name}</h1>
            </div>
          </div>
          <div className="album-buttons">
            <p className="play-button">
              <img className='PB' src={PlayButton} alt="play button" />
            </p>
            {!likeHeart ?
              (<p className="heart-button">
                <img className='HB' src={HeartIconUnliked} alt="unlike button" id={likeHeart} onClick={handleLikeHeart} />
              </p>) :
              (<p className="heart-button">
                <img className='HB' src={HeartIconLiked} alt="like button" id={likeHeart} onClick={handleLikeHeart} />
              </p>)}
            <p className="download-button">
              <img className='DB' src={DownloadIcon} alt="download button" />
            </p>
            <p className="three-dots">
              <img className='TD' src={ThreeDots} alt="know more button" />
            </p>
          </div>
          <div className="songs-top-line">
            <p className='title'>#TÍTULO</p>
            <p className='genre'>Gênero</p>
            <p className="clock-icon">
              <img src={ClockIcon} alt="clock icon" />
            </p>
          </div>

          <hr />
          {songs.map(((song, index) => (
            <SongPlaylist
              key={song.id}
              number={index + 1}
              songName={song.songName}
              artistName={song.artistName}
              albumName={song.songGenre}
              removeSong={() => removeSong(song.id)}
            />
          )))}
        </div>
      )}
    </div>
  )
}

export default ArtistAlbum