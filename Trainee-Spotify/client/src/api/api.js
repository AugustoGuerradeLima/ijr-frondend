import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQDn050OK8hcD1u05jLey7Vf_IWX4TE-mTS64esBYuKo5cJdBNGxB2UQqWnSYK6Th-nFUceJs5xwLFbbd-orr5TgWn9eaOWsJxUGQlJqKMSZYFN_0WpZ";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };