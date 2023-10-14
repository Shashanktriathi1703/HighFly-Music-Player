import React from "react";
import HighFly from "./HighFly.jpeg";
import "./login.css";
import { loginEndpoint } from "../../spotify";
const login = () => {
  return (
    <div className="login-page">
      <img src={HighFly} className="logo" alt="logo-spotify"></img>
      <h1 className="h1">HighFly Music Player</h1>
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
};

export default login;
