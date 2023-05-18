import React from 'react'

import { useState, useEffect } from 'react'

import { api } from '../../api/api'
import {current} from '../../services/CurrentUser'
import { upemail } from "../../services/UpdateEmail"
import { Alert } from '@mui/material'

import { useNavigate } from "react-router-dom"

import "./EmailModal.css"


function EmailModal(props) {

  const [userId,setUserId] = useState("")
  const [newEmail,setNewEmail] = useState("")

  const [errorEmail,setErrorEmail]=useState(false)
  const [successEmail,setSuccessEmail]=useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(newEmail==""){
      setErrorEmail(true)
      return
    }
    try{
      const response = await current()
      setErrorEmail(false)
      setUserId(response?.data?.id)
      console.log(userId)
      await upemail(userId,newEmail)
      setSuccessEmail("E-mail atualizado com sucesso!")
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

      <div className="error-container">
        {errorEmail ? (<Alert variant="filled" severity="error">O novo e-mail não pode ser vazio.</Alert>):null}
      </div>

      <div className="sucess-container">
          {successEmail?(<Alert variant="filled" severity='success'>{successEmail}</Alert>):null}
      </div>

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