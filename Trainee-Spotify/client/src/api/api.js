import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQDJ-cGjkxctBp6wlor0HoOG34CM4rQbc9gxxbAqqMqrPDGP1z5g4M6b7o_P3we9OFWUicM27N_HnZQihRM3HRKGTSsjZap_TAthOvALX1fcXgW_vvhk";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };