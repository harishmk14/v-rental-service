// src/Booking.js
import React, { useState } from 'react';
import './styles.css';

function Booking() {
  const [form, setForm] = useState({
    vehicleType: '',
    seats: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    driver: 'with-driver',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add booking submission logic here
    console.log(form);
    alert('Booking Submitted!');
  };

  return (
    <div className="booking-page">
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/vehicles">Vehicles</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#payment">Payment</a></li>
            <li><a href="#journy">Your Journey</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>
      <main className="booking-main">
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <h1>Search Vehicle</h1>
          <div className="form-row">
            <label>
              Vehicle Type:
              <select name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
                <option value="">Select a type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>
              </select>
            </label>
            <label>
              Number of Seats:
              <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                required
                min="1"
                max="100"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Start Time:
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="wdriver">
            <label>Driver:</label>
            <label>
              <input
                type="radio"
                name="driver"
                value="with-driver"
                checked={form.driver === 'with-driver'}
                onChange={handleChange}
              />
              With Driver
            </label>
            <label>
              <input
                type="radio"
                name="driver"
                value="without-driver"
                checked={form.driver === 'without-driver'}
                onChange={handleChange}
              />
              Without Driver
            </label>
          </div>
          <div className="searchb">
          <button type="submit" className="submit-button">Search</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Booking;
