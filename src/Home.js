// src/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import car from './img/car.png';
import bikeIcon from './img/bike.png'; // Import your icons
import carIcon from './img/car1.png';
import vanIcon from './img/van.png';
import busIcon from './img/bus.png';

function Home() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li 
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="/vehicles">Vehicles</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/vehicles/bike"><img src={bikeIcon} alt="Bike" />Bike</a></li>
                  <li><a href="/vehicles/car"><img src={carIcon} alt="Car" />Car</a></li>
                  <li><a href="/vehicles/van"><img src={vanIcon} alt="Van" />Van</a></li>
                  <li><a href="/vehicles/bus"><img src={busIcon} alt="Bus" />Bus</a></li>
                </ul>
              )}
            </li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#payment">Payment</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn" onClick={handleSignIn}>Sign In</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>
      <main className="main-content">
        <div className="content">
          <h1>Quick and simple vehicle rental service.</h1>
          <p>
            V-Rental is the leading bike, car, van, and bus rental service in Pondicherry, based on ratings and reviews from real users. Renowned for its reliability and top-notch service, V-Rental is the top-ranked rental company. If you're planning to rent a vehicle, you can trust V-Rental for a seamless and satisfying experience.
          </p>
        </div>
        <div className="image-container">
          <img src={car} alt="Car" />
        </div>
      </main>
    </div>
  );
}

export default Home;
