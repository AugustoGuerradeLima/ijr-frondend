import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQBBdIRCQZA6oRbzw3XwD2rqTDEie3eoKGOhKASHWoJcp-VDBCh1NAgBTkn4n_gsBQis8e4TyMcVxghqrWHaFkbWQnY2KcOK04vtpCpaFPolJ-97DFdO";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };