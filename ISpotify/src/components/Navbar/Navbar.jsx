import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../api/api";

import AlbumDisc from "../../images/album.svg";
import HeartDefault from "../../images/heart-default.svg";
import Logout from "../../images/logout.svg";

import "./Navbar.css";

const Navbar = () => {

  // const handleLogout = async () => {
  //   try {
  //     await api.post("/users/logout");
  //     navigate("/");
  //   } catch (err) {
  //     navigate("/");
  //   }
  // }

  const navigate = useNavigate()

  const handleLogout = async () => {
    navigate("/")
  }

  return (
    <div className="navbar">
      <h1 className="logo">iSpotify ®</h1>

      <div className="artistas-musicas">
        <img className="imgs-navbar" src={AlbumDisc} alt="album disc" />
        <h4>Artistas</h4>
      </div>

      <div className="artistas-musicas">
        <img className="imgs-navbar" src={HeartDefault} alt="album disc" />
        <h4>Músicas Curtidas</h4>
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
