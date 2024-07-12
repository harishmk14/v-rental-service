// src/SignIn.js
import React, { useState } from 'react';
import './styles.css';
import img1 from '../src/img/img1.png';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Handle login logic here
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-img-container">
        <img src={img1} alt="Logo" className="login-logo" />
      </div>
      <div className="login-box">
        <h1>LOGIN TO V-RENTAL</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="horizontal-group">
            <div className="input-group remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember Me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          {error && <div className="error">{error}</div>}
          <div className="horizontal-group buttons-group">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="create-account-button" onClick={handleSignUp}>Create Account</button>
          </div>
        </form>
        <div className="or-divider">or</div>
        <div className="social-login">
          <FaGoogle className="social-icon" />
          <FaFacebookF className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
