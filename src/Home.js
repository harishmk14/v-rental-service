// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import car from './img/car.png'

function Home() {
  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicals</Link></li>
            <li><Link to="#booking">Booking</Link></li>
            <li><Link to="#testimonial">Testimonial</Link></li>
            <li><Link to="#payment">Payment</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
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
