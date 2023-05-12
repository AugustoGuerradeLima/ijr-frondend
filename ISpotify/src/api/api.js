import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQCZhQuquWpcjAr21Sgc8JuGKr-ed8PHH9NRIIzC8YgMu0kECU6e_261QKAXWMIfMP7ZxlfoL-J_6cHIKdPCidmF7vW5Zb_P2pgKCuMjT0FSlk_4oCm6";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };