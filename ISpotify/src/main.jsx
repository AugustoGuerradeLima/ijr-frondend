import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Playlist from "./pages/Playlist/Playlist";
import FavArtists from "./pages/FavArtists/FavArtists";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Logout from "./pages/Logout/Logout";
import FavMusics from "./pages/FavMusics/FavMusics";
import MyAccount from "./pages/MyAccount/MyAccount";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/favArtists",
        element: <FavArtists />,
      },
      {
        path: "/favMusics",
        element: < FavMusics/>,
      },
      {
        path: "/playlist",
        element: < Playlist/>,
      },
      {
        path: "/myAccount",
        element: < MyAccount/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
