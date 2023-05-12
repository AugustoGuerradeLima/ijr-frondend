import { api } from "../api/api";

export function cadastro(body) {
  const res = api.post("/users", body);
  return res;
}