import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQAa6Lwy_o6HfxFWtonoQ7QP9H5TzH9hOLEkvUQ6SWf8vpMN3BgamhOJtxdaW8BNajCByWfaH0rfVEFevdKM8gaCXe-kvFj_xzU3NaB63GBGZ2a2izK9";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };