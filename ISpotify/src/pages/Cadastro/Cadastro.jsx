import React, { useState } from "react";

import "./Cadastro.css";
import Navbar from "../../components/Navbar/Navbar";

import { api } from '../../api/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';


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

  const createUser = async (e) => {
    e.preventDefault()

    const newUser = { name, email, password, role: 'user' }

    try {
      await api.post("/users", newUser)
      // await api.post("/users/login", { email, password })
      console.log('Usuário Cadastrado!')
      navigate("/")
    } catch (error) {
      console.error('Erro ao Cadastrar Usuário:', error);
    }
  }

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
      <div>
        {errorEveryVars ? (<Alert variant="filled" severity="error">Por favor, preencha todos os campos.</Alert>) :
          (<div></div>)
        }
      </div>
      <div>
        {errorEmail ? (<Alert variant="filled" severity="error">Esse e-mail já está sendo utilizado.</Alert>) :
          (<div></div>)
        }
      </div>

      <div>
        {success ? (<Alert variant="filled" severity="success">Usuário Cadastrado com sucesso!</Alert>) :
          (<div></div>)
        }
      </div>

      <h1 className="title">Inscrever-se em uma conta grátis do iSpotify ®</h1>

      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="email-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <img className="icon" src={Email} alt="email icon" />
          </div>

          <div className="password-container">
            <input
              type="password"
              placeholder="Crie uma senha"
              minLength="4"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <img className="icon" src={Cadeado} alt="password icon" />
          </div>

          <div className="user-name-container">
            <input
              type="text"
              placeholder="Como devemos chamar você?"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <img className="icon" src={User} alt="user icon" />
          </div>
        </div>

        <input type="submit" value="CADASTRAR" className="btn-cadastro" />

        {/* Teoricamente, isso teria que ser estilizado como um botão.
        <h2 className="button">
           <Link to={"/"}>Cadastrar</Link>
        </h2> */}
      </form>

      <span>
        Já é um usuário do iSpotify?
        <p>
          <Link to={"/"}>FAÇA O LOGIN</Link>
        </p>
      </span>
    </div>
  );
};

export default Cadastro;
