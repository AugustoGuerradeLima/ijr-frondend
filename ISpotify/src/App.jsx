import "./App.css";
import Playlist from "./pages/Playlist/Playlist";
import Login from "./pages/Login/Login";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
