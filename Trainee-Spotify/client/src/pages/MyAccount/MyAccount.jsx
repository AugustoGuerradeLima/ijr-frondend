import React from 'react'

import { useState, useEffect } from 'react'

import { api } from '../../api/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';
import { current } from "../../services/CurrentUser";

import "./MyAccount.css";


import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";
import Navbar from "../../components/Navbar/Navbar";
import EmailModal from "../../components/Modals/EmailModal"
import PasswordModal from "../../components/Modals/PasswordModal"

const Cadastro = () => {

  const navigate = useNavigate()

  const [currentUserName, setCurrentUserName] = useState("")
  const [currentUserEmail, setCurrentUserEmail] = useState("")

  const getCurrentUser = async()=>{
    try{
      const response = await current()

      setCurrentUserName(response?.data?.name)
      setCurrentUserEmail(response?.data?.email)

      console.log(currentUserName)
      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    (async () =>{
      await getCurrentUser()
    })()
  },[])

  const [displayEmailChange, setDisplayEmailChange] = useState(false)
  const handleDisplayEmailChange = (e) => {
    e.preventDefault()
    setDisplayEmailChange(true)
  }

  const [displayPasswordChange, setDisplayPasswordChange] = useState(false)
  const handleDisplayPasswordChange = (e) => {
    e.preventDefault();
    setDisplayPasswordChange(true)
  }

  const cancelEmailChange = () =>{
    setDisplayEmailChange(false)
  }

  const cancelPasswordChange = () =>{
    setDisplayPasswordChange(false)
  }

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-container-content">
        <h1 className="title">Minha Conta</h1>

        <form action="" method="post">
          <div className="form-container">

            <div className="user-name-container">
              <input
                type="text"
                placeholder="Como devemos chamar você?"
                name="name"
                disabled
                value={currentUserName}
              />
              <img className="icon" src={User} alt="user icon" />
            </div>

            <div className="email-container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                disabled
                value={currentUserEmail}
              />
              <img className="icon" src={Email} alt="email icon" />
            </div>
          </div>

          <button
            className="handle-btn"
            onClick={handleDisplayEmailChange}
          >
            Trocar Email
          </button>
          <button
            className="handle-btn"
            onClick={handleDisplayPasswordChange}
          >
            Trocar Senha
          </button>
        </form>
      </div>


      {displayEmailChange?      
      <div className="ModalEmail">
        <EmailModal cancelChange={cancelEmailChange}/>
      </div>:null}

      {displayPasswordChange?
          <div className="ModalPassword">
            <PasswordModal cancelChange={cancelPasswordChange}/>
          </div>:null}
    </div>
  );
};

export default Cadastro;
