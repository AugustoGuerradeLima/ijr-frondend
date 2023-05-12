import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../api/api";
import { logout } from "../../services/DeleteUser";

import AlbumDisc from "../../images/album.svg";
import HeartDefault from "../../images/heart-default.svg";
import Logout from "../../images/logout.svg";
import AccountIcon from "../../images/account-icon.svg";

import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await logout();
      navigate("/");
      alert("Logout feito com sucesso")
    } catch (err) {
      alert("Erro no logout")
      navigate("/");
    }
  }



  // const handleLogout = async () => {
  //   localStorage.removeItem("lastUser")
  //   navigate("/")
  // }

  const handleFavMusics = async () => {
    navigate("/favMusics")
  }

  const handleFavArtists = async () => {
    navigate("/favArtists")
  }

  const handleMyAccount = async () => {
    navigate("/myAccount")
  }

  return (
    <div className="navbar">
      <h1 className="logo">iSpotify ®</h1>

      <div className="artistas-musicas-conta" onClick={handleFavArtists}>
        <img className="imgs-navbar" src={AlbumDisc} alt="album disc" />
        <h4>Artistas</h4>
      </div>

      <div className="artistas-musicas-conta" onClick={handleFavMusics}>
        <img className="imgs-navbar" src={HeartDefault} alt="album disc" />
        <h4>Músicas Curtidas</h4>
      </div>

      <div className="artistas-musicas-conta" onClick={handleMyAccount}>
        <img className="imgs-navbar" src={AccountIcon} alt="album disc" />
        <h4>Minha Conta</h4>
      </div>

      <div className="logout" onClick={handleLogout}>
        <img className="imgs-navbar" src={Logout} alt="album disc" />
        <h4>Logout</h4>
        {/* <h4>
          <Link to={"/logout"}>Logout</Link>
        </h4> */}
      </div>
    </div>
  );
};

export default Navbar;
