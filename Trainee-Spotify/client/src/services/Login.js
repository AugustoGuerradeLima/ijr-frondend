import { api } from "../api/api";

export function login(body) {
  const res = api.post("/users/login", body);
  return res;
}
