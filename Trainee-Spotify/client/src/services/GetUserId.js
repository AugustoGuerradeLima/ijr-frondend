import { api } from "../api/api";

export function userid() {
  const res = api.get("/users/user");
  return res?.data?.id;
}