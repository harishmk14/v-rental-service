import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from './Slice/vehicleDataSlice';
import './styles.css';
import Modal from './Bookmodal';
import { Timer, Star, IndianRupee, MapPinned } from 'lucide-react';

function Booking() {
  const dispatch = useDispatch();
  const {vehicles} = useSelector((state) => state.vehicleData);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleBookClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVehicle(null);
  };

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



  return (
    <div style={{ backgroundColor: "#f4f4f4" }} className='booking_page'>
      <div style={{ boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)' }} className='search_area'>
        <div>
          <h1 style={{ textAlign: "center", color: "#132b75" }}>Search Vehicle</h1>
        </div>
        <div className='search_row'>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>  
              Vehicle Type:
              <select style={{ padding: "10px", borderRadius: "5px", width: "102%" }} name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
                <option value="">Select a type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>
              </select>
            </label>
          </div>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Number of Seats:
              <input type="number" name="seats" value={form.seats} onChange={handleChange} required min="1" max="50" />
            </label>
          </div>
        </div>
        <div className='search_row'>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Departure Date:
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
            </label>
          </div>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Arrive Date:
              <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
            </label>
          </div>
        </div>
        <div className='search_row'>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Departure Time:
              <input type="time" name="startTime" value={form.startTime} onChange={handleChange} required />
            </label>
          </div>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Arrive Time:
              <input type="time" name="endTime" value={form.endTime} onChange={handleChange} required />
            </label>
          </div>
        </div>
        <div className='search_driver'>
          <label style={{ color: "#132b75" }}>Driver:</label>
          <div className='driver_rad'>
            <label style={{ color: "#132b75" }}>
              <input type="radio" name="driver" value="with-driver" checked={form.driver === 'with-driver'} onChange={handleChange} />
              With Driver
            </label>
          </div>
          <div className='driver_rad'>
            <label style={{ color: "#132b75" }}>
              <input type="radio" name="driver" value="without-driver" checked={form.driver === 'without-driver'} onChange={handleChange} />
              Without Driver
            </label>
          </div>
        </div>
        <div className='search_button'>
          <button style={{ color: "white", padding: "10px", width: "100px", borderRadius: "5px", backgroundColor: "#132b75", border: "none", cursor: "pointer" }} type="submit">Search</button>
        </div>
      </div>
      <div style={{ padding: '20px', gap: '20px' }} className='bookv-cards'>
        {vehicles.map((vehicle, index) => (
          <div className="bookv-card" key={index}>
            <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.brandName} />
            <div className='portion1'>
              <h2>{vehicle.brandName}</h2>
              <p><IndianRupee color="#132b75" size={16} /> {vehicle.price} / Day</p>
              <p><Star color="#132b75" size={16} /> {vehicle.star} / {vehicle.review}</p>
              <p><MapPinned color="#132b75" size={16} /> Extra km fare Rs. {vehicle.price / 100} /km after {vehicle.range} kms</p>
              <p><Timer color="#132b75" size={16} /> Extra time fare Rs. {vehicle.price / 25} per 30 mins after 24hr</p>
              <div className="bookv-features">
                <div className="feature1">{vehicle.seater} Seats</div>
                <div className="feature1">{vehicle.acOrNonAc}</div>
                <div className="feature1">{vehicle.gearType}</div>
                <div className="feature1">{vehicle.fuelType}</div>
              </div>
            </div>
            <div style={{ marginLeft: "40px", marginTop: "40px" }}>
              <p style={{ fontSize: "40px", color: "#132b75", fontFamily: "sans-serif", margin: "10px" }}><IndianRupee color="#132b75" size={30} />{vehicle.price}</p>
              <p style={{ color: "#132b75", fontFamily: "sans-serif", margin: "10px" }}>+ ₹{vehicle.price / 8 + 3} Taxes & Charges</p>
              <button type="submit" style={{ backgroundColor: "#132b75", color: "white", borderRadius: "6px", fontSize: "16px", width: "7rem", padding: "10px", margin: "20px", cursor: "pointer", fontFamily: "sans-serif", border: "none" }}
                onClick={() => handleBookClick(vehicle)}>
                Book</button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal} vehicle={selectedVehicle} />
    </div>
  );
}

export default Booking;
