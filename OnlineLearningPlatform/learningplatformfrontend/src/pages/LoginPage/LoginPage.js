import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './loginPage.css';
import logo from '../../assets/learning_logo.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin();
  };

  const onLogin = () => {
    axios.post("http://localhost:4001/users/loginUser", { username: username, password: password })
      .then((res) => {
          const responseData = res.data;
          const token = responseData.token;
          localStorage.setItem("token", `Bearer ${token}`);
          window.location.href = "/landing";
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="login-logo" />
        </NavLink>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <NavLink to="/forgot-password" className="forgot-password-link">Forgot your password?</NavLink>
          </div>
          <button type="submit" className="login-submit-button">Login</button>
        </form>
        <div className="signup-link">
          <NavLink to="/register" className="signup-link-text">Don't have an account?</NavLink>
        </div>
        <div className="login-options">
        </div>
      </div>
    </div>
  );
};

export default Login;
