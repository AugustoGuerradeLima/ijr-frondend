import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/Login";

import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      alert("Login efetuado com sucesso!");
      setErrorLogin(null);
      navigate("/favArtists");
    } catch (err) {
      setErrorLogin(err.response.data);
    }
  };

  return (
    <div className="main-container">
      <h1 className="logo">iSpotify ®</h1>
      <h2 className="Title">Música para todos.</h2>

      <form onSubmit={handleLogin}>
        <div className="form-container">
          <div className="email-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
          <div className="error-container">
            {errorLogin && <p className="error-message">{errorLogin}</p>}
          </div>
        </div>

        <button className="btn-login" type="submit">
          ENTRAR
        </button>
      </form>

      <span>
        NÃO TEM UMA CONTA ?{" "}
        <p>
          <Link to={"/cadastro"}> INSCREVA-SE</Link>
        </p>
      </span>
    </div>
  );
}
