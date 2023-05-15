import React from 'react'

import { useState, useEffect } from 'react'

import { api } from '../../api/api'
import {current} from '../../services/CurrentUser'
import { upemail } from "../../services/UpdateEmail"

import { useNavigate } from "react-router-dom"

import "./EmailModal.css"


function EmailModal(props) {

  const [userId,setUserId] = useState("")
  const [newEmail,setNewEmail] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await current()
      setUserId(response?.data?.id)
      console.log(userId)
      await upemail(userId,newEmail)
      alert("E-mail atualizado com sucesso!")
      window.location.reload()
    }catch(error){
      console.log(error)
    }
  } 

  const cancel = () =>{
    props.cancelChange()
  }
  return (
    <div className="emailModal">
      <h2 className= "modal-title">Novo E-mail</h2>
        <form onSubmit={handleSubmit}>
            <input
                className="new-email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setNewEmail(e.target.value)}
            />
            <input className="cancel-btn" type="button" value="Cancelar" onClick={cancel}/>
            <input className="confirm-btn" type="submit" value="Confirmar"/>
        </form>
    </div>
  )
}

export default EmailModal