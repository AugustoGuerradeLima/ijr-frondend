import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQDjr9_rfd-fIzvW24f6YrGG8sLaIWiRFPxNIdLdfeHcHeTDsGlsoFCfsOnS2TKFe1j-N_AY5QZZ6HWUd5mYkGdd1dfyvuz82FCvfqfLUt0giSHQCWVL";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };