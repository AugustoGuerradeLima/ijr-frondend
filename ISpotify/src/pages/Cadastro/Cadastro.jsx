import React from "react";
import "./Cadastro.css";

import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";

const Cadastro = () => {
  return (
    <div className="main-container">
      <h1 className="title">Inscrever-se em uma conta grátis do iSpotify ®</h1>

      <form action="" method="post">
        <div className="container">
          <div className="email-container">
            <input type="email" placeholder="Email" name="email" required />
            <img className="icon" src={Email} alt="email icon" />
          </div>

          <div className="password-container">
            <input
              type="password"
              placeholder="Crie uma senha"
              name="password"
              required
            />
            <img className="icon" src={Cadeado} alt="password icon" />
          </div>

          <div className="user-name-container">
            <input
              type="text"
              placeholder="Como devemos chamar você?"
              name="name"
              required
            />
            <img className="icon" src={User} alt="user icon" />
          </div>
        </div>

        <button>Cadastrar</button>
      </form>

      <span>
        Já é um usuário do iSpotify? <a href="#">FAÇA LOGIN</a>
      </span>
    </div>
  );
};

export default Cadastro;
