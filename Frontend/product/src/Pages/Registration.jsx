import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import axios from "axios"
const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "", // Initialize 'role' in the state
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/user/register", signUp);
      console.log(response.data);

      setSignUp({
        username: "",
        password: "",
        confirmPassword: "",
        role: "", // Clear 'role' in the state after submission
      });
  
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
    console.log("failed to register",error.message)
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-body">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUp.username}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={signUp.password}
              onChange={handleInputChange}
              required
            />

            <span
              className="password-visibility-toggle"
              onClick={handleShowPassword}
            ></span>
          </div>

          <div className="role-field">
            <label htmlFor="role">Role</label>

            <select
              id="role"
              name="role"
              value={signUp.role}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
