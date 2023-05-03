import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQAMfWh46KbHbm_tqhtakdXiPvB1pNh4RwgifDHn5xSy846PyQ64Uz8oE3-McAFZAFAT6zgHwLncmY9H_Sz65-htIxaaQwsRj2FNOj43S8jYATWSv65g";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };