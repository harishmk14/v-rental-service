// src/Vehicles.js
import React from 'react';
import './styles.css';

function Vehicles() {
  const vehicles = [
    {
      name: "Honda Jazz",
      price: "$250/ Day",
      reviews: "23 Reviews",
      image: "path/to/honda_jazz.png",
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      name: "Volkswagen Vento",
      price: "$270/ Day",
      reviews: "76 Reviews",
      image: "path/to/volkswagen_vento.png",
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      name: "Nissan GT-R",
      price: "$450/ Day",
      reviews: "42 Reviews",
      image: "path/to/nissan_gtr.png",
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      name: "Mitsubishi ASX",
      price: "$375/ Day",
      reviews: "35 Reviews",
      image: "path/to/mitsubishi_asx.png",
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    }
  ];

  return (
    <div className="vehicles-page">
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#vehicals">Vehicals</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#payment">Payment</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>
      <main className="vehicle-main">
        <div className="vehicle-cards">
          {vehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index}>
              <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
              <h2>{vehicle.name}</h2>
              <p className="vehicle-price">{vehicle.price}</p>
              <p className="vehicle-reviews">⭐ {vehicle.reviews}</p>
              <div className="vehicle-features">
                {vehicle.features.map((feature, i) => (
                  <div className="feature" key={i}>{feature}</div>
                ))}
              </div>
              <button className="rent-button">Rent a Car</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Vehicles;
