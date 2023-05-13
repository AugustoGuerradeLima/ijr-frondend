import React, { useState } from "react";

import { api } from '../../api/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';

import "./MyAccount.css";


import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";
import Navbar from "../../components/Navbar/Navbar";
import EmailModal from "../../components/Modals/EmailModal"
import PasswordModal from "../../components/Modals/PasswordModal"

const Cadastro = () => {

  const [displayEmailChange, setDisplayEmailChange] = useState(false)
  const handleDisplayEmailChange = (e) => {
    e.preventDefault()
    setDisplayEmailChange(true)}

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [name, setName] = useState('')

  // const lastUser = JSON.parse(localStorage.getItem("lastUser"))

  // const name = lastUser.name
  // const email = lastUser.email
  // const password = lastUser.password

  const navigate = useNavigate()

  // const createUser = async(e)=>{
  //   e.preventDefault()

  //   const newUser = {name,email,password,role:'user'}

  //   try{
  //     const response = await api.post("/users",newUser)
  //     console.log('Usuário Cadastrado!',response.newUser)
  //     navigate("/")
  //   }catch(error){
  //     console.error('Erro ao Cadastrar Usuário:',error);
  //   }
  // }

  // const handleEmail = (e) => { }

  // const handleName = (e) => { }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   

  //   

  //   setName(lastUser.name)
  //   setEmail(lastUser.email)
  //   setPassword(lastUser.password)

  // }

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
                // value={name}
              />
              <img className="icon" src={User} alt="user icon" />
            </div>

            <div className="email-container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                disabled
                // value={email}
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
          // onClick={handleSubmit}
          >
            Trocar Senha
          </button>
        </form>
      </div>
      
      <div className="ModalEmail">
        <EmailModal/>
      </div>
      <div className="ModalPassword">
        <PasswordModal/>
      </div>

    </div>
  );
};

export default Cadastro;
