import { api } from "../api/api";

export function current() {
  const res = api.get("/users/user");
  return res;
}