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
    // Add booking submission logic here
    console.log(form);
    alert('Booking Submitted!');
  };

  return (
    <div className="booking-page">
      <div className="booking-main">
        <form className="booking-form" onSubmit={handleSubmit}>
          <h1>Search Vehicle</h1>
          <div className="form-row">
            <label className='first'>
              Vehicle Type:
              <select name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
                <option value="">Select a type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>
              </select>
            </label>
            <label className='first'>
              Number of Seats:
              <input
                className='first1'
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
            <label className='first'>
              Start Date:
              <input
                className='first1'
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </label>
            <label className='first'>
              End Date:
              <input
                className='first1'
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label className='first'>
              Start Time:
              <input
                className='first1'
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                required
              />
            </label>
            <label className='first'>
              End Time:
              <input
                className='first1'
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="driver-container">
            <label className='single'>Driver:</label>
            <div className="driver-ratio">
              <label className='second'>
                <input
                  className='second2'
                  type="radio"
                  name="driver"
                  value="with-driver"
                  checked={form.driver === 'with-driver'}
                  onChange={handleChange}
                />
                With Driver
              </label>
              <label className='second'> 
                <input
                  className='second2'
                  type="radio"
                  name="driver"
                  value="without-driver"
                  checked={form.driver === 'without-driver'}
                  onChange={handleChange}
                />
                Without Driver
              </label>
            </div>
          </div>

          <div className="searchb">
            <button type="submit" className="submit-button">Search</button>
          </div>
        </form>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default Booking;
