import "./App.css";
import Playlist from "./pages/Playlist/Playlist";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar"

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default App;
