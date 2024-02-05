import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

import axios from 'axios';
const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
    
  });

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/user/login', login);
      const { token } = response.data;
      if (token) {
        sessionStorage.setItem('jwt', token)
        navigate('/admin');
      }
    } catch (error) {
      const errorMessage = error.response.data.error || 'Login failed. Please try again.'
      toast.error(errorMessage);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
   
      <div className='login-wrapper'>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form' onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id='username'
            name="username"
            value={login.username}
            onChange={handleInputChange}
            required 
            />
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                value={login.password}
                onChange={handleInputChange}
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
          
              </span>
            </div>
            <button type="submit">LOG IN</button>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
      </div>
   
    </>
  );
};

export default Login;