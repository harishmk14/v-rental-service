// src/SignIn.js
import React from 'react';
import './styles.css';
import img1 from '../src/img/img1.jpg'

function SignIn() {
  return (
    <div className="login-container">
        <img src={img1} alt="Logo" className="login-logo" />
      <div className="login-box">
        <h2>LOGIN TO V-RENTAL</h2>
        <form >
          <div className="input-group">
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Mobile"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;