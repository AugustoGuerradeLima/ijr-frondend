import React, { useState } from "react";

import "./Cadastro.css";

import { api } from '../../api/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';
import { cadastro } from "../../services/CreateUser";


import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";

const Cadastro = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [errorCadastro, setErrorCadastro] = useState();
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || name) {
      setErrorCadastro("Por Favor, preencha todos os campos!")
      return;
    }

    const newUser = { name, email, password, role: 'user' }

    try {
      const res = await cadastro(newUser);
      alert("Cadastro efetuado com sucesso!");
      setErrorCadastro(null);
      navigate("/");
    } catch (err) {
      // setErrorCadastro(err.response.data);
      alert("Erro no cadastro!");
      setErrorCadastro(err.response.data)
    }
  }

  return (
    <div className="main-container-content">

      <h1 className="title">Inscrever-se em uma conta grátis do iSpotify ®</h1>

      <div className="error-container">
        {errorCadastro ? (<Alert variant="filled" severity="error">{errorCadastro}</Alert>) : (<div></div>)}
      </div>

      <form onSubmit={handleSubmit}>
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
