import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";

/* const navigateToFavArtists = () => {
  navigate("/favArtists");
}; */

const Login = () => {
  return (
    <div className="main-container">
      <h1 className="logo">iSpotify ®</h1>
      <h2 className="Title">Música para todos.</h2>

      <form action="" method="post">
        <div className="container">
          <div className="email-container">
            <input type="email" placeholder="Email" name="email" required />
            <img className="icon" src={Email} alt="email icon" />
          </div>

          <div className="password-container">
            <input
              type="password"
              placeholder="Senha"
              name="password"
              required
            />
            <img className="icon" src={Cadeado} alt="password icon" />
          </div>
        </div>

        <h2 className="button">
          <Link to={"/favArtists"}>Entrar</Link>
        </h2>
        {/* <button onClick={navigateToFavArtists}>Entrar</button> */}
      </form>

      <span>
        Não tem uma conta?{" "}
        <p>
          <Link to={"/cadastro"}>Inscreva-se</Link>
        </p>
      </span>
    </div>
  );
};

export default Login;
