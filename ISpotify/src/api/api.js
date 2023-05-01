import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQATo_ArOC9G5llOc2MoYitrpXUrcmgfiLjBwXUjV-JP54u0HU8c_VvAHSLS-s9ErDIZhkH06LMskPUwi08JGGuXy8zTRfNf6UqwPCGsPJ75lf8bYBco";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };