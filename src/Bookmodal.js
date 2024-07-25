// src/Bookmodal.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Bookmodal = ({ show, onClose, vehicle }) => {
  const navigate = useNavigate();
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
    proof: '',
    travelType: '',
    persons: '',
    paymentMethod: ''
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
    if (form.paymentMethod === 'cashon') {
      navigate('/journey', { state: { status: 'Pending' } });
    } else if (form.paymentMethod === 'onlinepay') {
      navigate('/payment');
    }
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
      proof: '',
      travelType: '',
      persons: '',
      paymentMethod: ''
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
    <div className="modal-content">
      <h2 className="modal-title">{vehicle ? `Book ${vehicle.name}` : 'Booking Details'}</h2>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", marginTop:"20px", rowGap:"15px"}}>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="text" name="departureLocation" value={form.departureLocation} onChange={handleChange} required placeholder='Departure Place' />
          </div>
          <div className='new'>
            <input style={{width:"100%"}} type="text" name="arriveLocation" value={form.arriveLocation} onChange={handleChange} required placeholder='Arrive Place' />
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <div style={{width:"100%"}} className="static-field">static</div>
          </div>
          <div className='new'> 
            <div style={{width:"100%"}} className="static-field">static</div>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="time" name="departureTime" value={form.departureTime} onChange={handleChange} required placeholder='Departure Time' />
          </div>
          <div className='new'>
            <input style={{width:"100%"}} type="time" name="arriveTime" value={form.arriveTime} onChange={handleChange} required placeholder='Arrive Time' />
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <select style={{width:"100%", borderRadius:"5px", border:"1px solid #b6b5b5", color:"#767676"}} name="travelType" value={form.travelType} onChange={handleChange} >
              <option value="">Travel Type</option>
              <option value="Hillstation">Hill Station</option>
              <option value="Outstation">Outstation</option>
              <option value="Offroading">Off-Roading</option>
              <option value="Citytravel">City Travel</option>
              <option value="Highwaytravel">Highway Travel</option>
            </select>
          </div>
          <div className='new'>
            <input style={{width:"100%"}} type="number" name="persons" value={form.persons} onChange={handleChange} required placeholder='No.of Persons'/>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="text" name="name" value={form.name} onChange={handleChange} required placeholder='Name (Main)' />
          </div>
          <div className='new'>
          <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676" }} name="gender" value={form.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="tel" name="mobile" value={form.mobile} onChange={handleChange} required placeholder='Mobile No'/>
          </div>
          <div className='new'>
            <input style={{width:"100%"}} type="tel" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} placeholder='Alternate No'/>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="email" name="email" value={form.email} onChange={handleChange} required placeholder='Email'/>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <input style={{width:"100%"}} type="text" name="address" value={form.address} onChange={handleChange} required placeholder='Address'/>
          </div>
        </div>
        <div className="mform-row">
          <div className='new'>
            <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676" }} name="proof" value={form.proof} onChange={handleChange} >
              <option value="">Select Proof</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="license">Driving License</option>
            </select>
          </div>
          <div className='new'>
            <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676" }} name="paymentMethod" value={form.paymentMethod} onChange={handleChange} >
              <option value="">Payment Method</option>
              <option value="cashon">Cash On</option>
              <option value="onlinepay">Online Pay</option>
            </select>
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
