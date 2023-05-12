import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQC9AYwu9lODQnDnt_xj9L7ElBf2iOUkgOi1Cgxd15sh_BMwvrn9FfQxygK8m3dMQdUdxc6TwPuPPi3V-mA-UjuW06gwrIP01NdYGMCHK3uKzdw8fxU7";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };