import React from 'react'

import { useState, useEffect } from 'react'

import { api } from '../../api/api'
import {current} from '../../services/CurrentUser'
import { uppassword } from "../../services/UpdatePassword"

import "./PasswordModal.css"

function PasswordModal(props) {

  const [userId,setUserId] = useState("")
  const [password,setPassword] = useState("")
  const [currentPassword,setCurrentPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [confirmNewPassword,setConfirmNewPassword] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(newPassword==""){
      alert("A nova senha não pode ser vazia.")
      return
    }
    if(newPassword != confirmNewPassword){
      alert("A nova senha e a confirmação devem coincidir")
      return
    }
    try{
      const response = await current()
      setUserId(response?.data?.id)
      console.log(userId)
      await uppassword(userId,newPassword)
      alert("Senha atualizada com sucesso!")
      window.location.reload()
    }catch(error){
      console.log(error)
    }
  }

  const cancel = () =>{
    props.cancelChange()
  }
  return (
    <div className="passwordModal">
        <h2 className= "modal-title">Nova Senha</h2>
        <form onSubmit={handleSubmit}>
            <input
                className="old-password"
                type="password"
                placeholder="Senha atual"
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                className="new-password"
                type="password"
                placeholder="Nova senha"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
                className="confirm-new-password"
                type="password"
                placeholder="Confirmar nova senha"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
            />


            <input className="cancel-btn" type="button" value="Cancelar" onClick={cancel}/>
            <input className="confirm-btn" type="submit" value="Confirmar" />
        </form>
    </div>
  )
}

export default PasswordModal