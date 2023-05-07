import React,{useState} from "react";
import "./Cadastro.css";
import { api } from '../../api/api'
import { Link } from "react-router-dom";

import Email from "../../images/Email.svg";
import Cadeado from "../../images/Cadeado.svg";
import User from "../../images/User.svg";

const Cadastro = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');

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

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(email == localStorage.getItem('email')){
      console.error('E-mail já cadastrado.')
    }
    else{
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      console.log('Cadastro realizado com sucesso!')
    }
  }

  return (
    <div className="main-container">
      <h1 className="title">Inscrever-se em uma conta grátis do iSpotify ®</h1>

      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="container">
          <div className="email-container">
            <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            required
            onChange={(e)=>setEmail(e.target.value)}/>
            <img className="icon" src={Email} alt="email icon" />
          </div>

          <div className="password-container">
            <input
              type="password"
              placeholder="Crie uma senha"
              name="password"
              required
              onChange={(e)=>setPassword(e.target.value)}/>
            <img className="icon" src={Cadeado} alt="password icon" />
          </div>

          <div className="user-name-container">
            <input
              type="text"
              placeholder="Como devemos chamar você?"
              name="name"
              required
              onChange={(e)=>setName(e.target.value)}/>
            <img className="icon" src={User} alt="user icon" />
          </div>
        </div>

        <input type="submit" value="CADASTRAR" className="b" />

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
