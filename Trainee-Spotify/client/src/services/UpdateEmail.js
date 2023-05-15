import { api } from "../api/api"

export function upemail(id,newEmail){
    const res = api.put(`/users/${id}`,{email: newEmail})
    return res
}