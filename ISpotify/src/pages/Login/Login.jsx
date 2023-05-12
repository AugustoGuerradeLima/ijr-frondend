import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';

import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";

/* const navigateToFavArtists = () => {
  navigate("/favArtists");
}; */

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorEveryVars, setErrorEveryVars] = useState(false)

  // const [lastUser, setLastUser] = useState([])

  const navigate = useNavigate()

  // const createLogin = async(e) => {
  //   e.preventDefault()

  //   const oldUser = {email,password}

  //   try{
  //     const response = await api.post("/users/login",oldUser)
  //     console.log('Usuário Cadastrado!',response.oldUser)
  //     navigate("/favArtists")
  //   }catch(error){
  //     console.error('Erro ao Cadastrar Usuário:',error);
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setErrorEveryVars(true)
      setErrorPassword(false)
      setErrorEmail(false)
      // console.log("preencha todos os campos")
      return;
    }

    setErrorEmail(false)
    setErrorEveryVars(false)

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find((user) => user.email === email)

    if (!foundUser) {
      // console.error("Esse e-mail ainda não foi cadastrado.")
      // console.log("email não encontrado")
      setErrorEmail(true)
    } else {
      const index = users.map(user => user.email).indexOf(email)
      const name = users[index].name
      if (users[index].password === password) {
        // console.log("senha correta")
        setErrorPassword(false)
        navigate("/favArtists")

        const lastUser = { name, email, password }
        console.log(lastUser)
        localStorage.setItem("lastUser", JSON.stringify(lastUser))
      } else {
        // console.log("senha incorreta")
        setErrorPassword(true)
      }
    }

  }

  return (
    <div className="main-container-content">
      <div>
        {errorEveryVars ? (<Alert variant="filled" severity="error">Por favor, preencha todos os campos.</Alert>) :
          (<div></div>)
        }
      </div>
      <div>
        {errorEmail ? (<Alert variant="filled" severity="error">Esse e-mail ainda não foi cadastrado.</Alert>) :
          (<div></div>)
        }
      </div>
      <div>
        {errorPassword ? (<Alert variant="filled" severity="error">Senha Incorreta!</Alert>) :
          (<div></div>)
        }
      </div>
      <h1 className="logo">iSpotify ®</h1>
      <h2 className="Title">Música para todos.</h2>

      <form action="" method="post">
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
              placeholder="Senha"
              minLength="4"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img className="icon" src={Cadeado} alt="password icon" />
          </div>
        </div>
        <button className="btn-login" onClick={handleSubmit}>ENTRAR</button>
      </form>

      <span>
        NÃO TEM UMA CONTA ?{" "}
        <p>
          <Link to={"/cadastro"}> INSCREVA-SE</Link>
        </p>
      </span>
    </div>
  );
};

export default Login;
