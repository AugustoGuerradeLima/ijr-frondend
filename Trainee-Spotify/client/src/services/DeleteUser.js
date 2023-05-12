import { api } from "../api/api";

export function logout() {
  const res = api.post("/users/logout");
  return res;
}