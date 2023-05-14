import React from 'react'

import { useState, useEffect } from 'react'

import { api } from '../../api/api'
import { userid } from "../../services/GetUserId";

import "./EmailModal.css"


function EmailModal(props) {

  const [userId,setUserId] = useState("")
  const [newEmail,setNewEmail] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await userid()
      setUserId(response)

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