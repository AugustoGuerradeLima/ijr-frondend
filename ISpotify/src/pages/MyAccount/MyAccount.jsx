import React, { useState } from "react";

import { api } from '../../api/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';

import "./MyAccount.css";


import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";

const Cadastro = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [errorEmail, setErrorEmail] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorEveryVars, setErrorEveryVars] = useState(false)
  const [users, setUsers] = useState([])

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

  const handleEmail = (e) => { }

  const handleName = (e) => { }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || !name) {
      setErrorEveryVars(true);
      setErrorEmail(false)
      return;
    }

    setSuccess(false)
    setErrorEmail(false)
    setErrorEveryVars(false)

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find((user) => user.email === email)

    if (foundUser) {
      console.error("Esse e-mail já está sendo utilizado.")
      setErrorEmail(true)
      // console.log(users[0].password)
    } else {
      setErrorEmail(false)
      setSuccess(true)

      const newUser = { name, email, password }
      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))
      console.log("Usuário cadastrado com sucesso!")
      navigate("/")
    }
  }

  return (
    <div className="main-container">

      <h1 className="title">Minha Conta</h1>

      <form action="" method="post">
        <div className="form-container">

          <div className="user-name-container">
            <input
              type="text"
              placeholder="Como devemos chamar você?"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <img className="icon" src={User} alt="user icon" />
          </div>

          <div className="email-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <img className="icon" src={Email} alt="email icon" />
          </div>


        </div>

        <button className="handle-btn" onClick={handleSubmit}>Trocar Email</button>
        <button className="handle-btn" onClick={handleSubmit}>Trocar Senha</button>

        {/* Teoricamente, isso teria que ser estilizado como um botão.
        <h2 className="button">
           <Link to={"/"}>Cadastrar</Link>
        </h2> */}
      </form>
    </div>
  );
};

export default Cadastro;
