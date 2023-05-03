import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQDBMGSfMMjFM99fypHyVcXc3ZSAt-1-CVb5-jAEGxZ8vSjt_FKreZDTWLYKuSrWhZ1CU8okRQmJiXFKdGur-qPzp2iz43oKzOG6Wstn6oIfqo6TEPO2";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };