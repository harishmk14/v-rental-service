import React, { useState } from 'react';
import './styles.css';

const Bookmodal = ({ show, onClose, vehicle }) => {
  const [form, setForm] = useState({
    departureLocation: '',
    arriveLocation: '',
    departureDate: '',
    arriveDate: '',
    departureTime: '',
    arriveTime: '',
    name: '',
    gender: '',
    mobile: '',
    alternateMobile: '',
    email: '',
    address: '',
    proof: ''
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
    // Add booking submission logic
    console.log(form);
    alert('Booking Details Submitted!');
    resetForm(); 
    onClose();
  };

  const resetForm = () => {
    setForm({
      departureLocation: '',
      arriveLocation: '',
      departureDate: '',
      arriveDate: '',
      departureTime: '',
      arriveTime: '',
      name: '',
      gender: '',
      mobile: '',
      alternateMobile: '',
      email: '',
      address: '',
      proof: ''
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{vehicle ? `Book ${vehicle.name}` : 'Booking Details'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mform-row">
            <div>
              <label>Departure Place:
                <input type="text" name="departureLocation" value={form.departureLocation} onChange={handleChange} required />
              </label>
            </div>
            <div>
              <label>Arrive Place:
                <input type="text" name="arriveLocation" value={form.arriveLocation} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <div className="mform-row">
            <div>
              <label>Departure Date:</label>
              <div style={{width:"96%"}} className="static-field">static</div>
            </div>
            <div>
              <label>Arrive Date:</label>
              <div style={{width:"96%"}} className="static-field">static</div>
            </div>
          </div>
          <div className="mform-row">
            <div>
              <label>Departure Time:
                <input style={{padding:"6px"}} type="time" name="departureTime" value={form.departureTime} onChange={handleChange} required />
              </label>
            </div>
            <div>
              <label>Arrive Time:
                <input style={{padding:"6px"}} type="time" name="arriveTime" value={form.arriveTime} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <div className="mform-row">
            <div>
              <label>Name (Main):
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
            </div>
            <div>
              <label>Gender:
                <input type="text" name="gender" value={form.gender} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <div className="mform-row">
            <div>
              <label>Mobile No:
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
              </label>
            </div>
            <div>
              <label>Alternate No:
                <input type="tel" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className="mform-row">
            <div className="full-width">
              <label>Email:
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <div className="mform-row">
            <div className="full-width">
              <label>Address:
                <input type="text" name="address" value={form.address} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <div className="modal-buttons">
            <div><button type="submit" className="continue-button">Continue</button></div>
            <div><button type="button" onClick={() => { resetForm(); onClose(); }} className="cancel-button">Cancel</button></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookmodal;
