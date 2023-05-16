import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQCpyoXpvmaFvPpk7zrnyJql_18mYiC8bI23bC-UpE1GYoDZ7WB7_7N68tB4jX4uvNXEUcvMOmOJmCL5CTyUsJf2ekdBHCAiRbw1fy_LkGA3teqMm5e5";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };