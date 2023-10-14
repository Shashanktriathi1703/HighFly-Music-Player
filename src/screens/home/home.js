import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar"
import Library from "../library/library";
import Player from "../player/player";
import Trending from "../trending/trending";
import Feed from "../feed/feed";
import Favorites from "../favourite/favorites";
import './home.css'
import Login from '../auth/login';
import { setClientToken } from "../../spotify";
const Home = () => {
    const [token, setToken] = useState("");
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash;
      window.location.hash = "";
      if (!token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
        setClientToken(_token);
        return;
      }
      else{
      setToken(token);
      setClientToken(token);
      }
    }, []);
  
    return !token ? (
      <Login />
    ) : (
      <Router>
        <div className="main-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default Home;
//settingsScreen
//settingsScreen
