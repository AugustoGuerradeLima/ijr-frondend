import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
})

const token = "BQBVo6iwpLgJRCTMiYPbSD7EhhRt7LJqOs6WClUCXMewmLtnGzT0kjp1gPyqTZHTfASalwtI5GehEv4h3ujO1xycg3aCVqrue4UR2V9QQZvuF_GjQSnHi0dbdvYPtj-_3a38eA7b0oOujyGoIeZnuDEQbDOFBjl5cqN37pd2gRuWeyLIecs2x3J5VySlewDskOYa";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { api, apiSpotify };