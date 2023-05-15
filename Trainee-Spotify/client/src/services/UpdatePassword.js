import { api } from "../api/api"

export function uppassword(id,newPassword){
    const res = api.put(`/users/${id}`,{password: newPassword})
    return res
}