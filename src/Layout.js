// src/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './styles.css';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><span onClick={() => navigate('/')}>Home</span></li>
            <li><span onClick={() => navigate('/vehicles')}>Vehicles</span></li>
            <li><span onClick={() => navigate('/booking')}>Booking</span></li>
            <li><span onClick={() => navigate('/payment')}>Payment</span></li>
            <li><span onClick={() => navigate('/journey')}>Your Journey</span></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn" onClick={() => navigate('/signin')}>Sign In</button>
          <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
