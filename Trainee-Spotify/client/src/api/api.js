import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQC_vz_yhMpV0b54s0Uqk4OlC0upBUCrcyx6LebMYLOMmTRc651tdqDFHPbhk1AwqlXnYG1as7aTwmtvOy0AO5t7K7rU878mz0C6e1ukHEoaGMy2gNaa";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };