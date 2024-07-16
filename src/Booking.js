// src/Booking.js
import React, { useState } from 'react';
import './styles.css';
import Modal from '../src/Bookmodal';
import CAR1 from '../src/img/Honda_Jazz.png'
import CAR2 from '../src/img/Volkswagen_Vento.png'
import CAR3 from '../src/img/Nissan_GT-R.png'
import CAR4 from '../src/img/MitsubishiASX.png'
import BIKE1 from '../src/img/yamaha_r1.png'
import BIKE2 from '../src/img/ducati_panigale.png'
import BIKE3 from '../src/img/harley_street750.png'
import BIKE4 from '../src/img/bmw_s1000rr.png'
import VAN1 from '../src/img/ford_transit.png'
import VAN2 from '../src/img/mercedes_sprinter.png'
import VAN3 from '../src/img/ram_promaster.png'
import VAN4 from '../src/img/nissan_nv3500.png'
import BUS1 from '../src/img/mercedes_tourismo.png'
import BUS2 from '../src/img/volvo_9700.png'
import BUS3 from '../src/img/scania_touring.png'
import BUS4 from '../src/img/man_lions_coach.png'
import { Timer , Star , IndianRupee , MapPinned} from 'lucide-react';

function Booking() {


  const vehiclesData = [
    // Cars
    {type: "Car",name: "Honda Jazz",price: 2500,reviews: "23 Reviews", star: 4.5,src: CAR1,features: ["4 Seats", "AC", "Auto", "Petrol"], range:120},
    {type: "Car",name: "Volkswagen Vento",price: 2700,reviews: "76 Reviews", star: 4.5,src: CAR2,features: ["4 Seats", "AC", "Auto", "Petrol"], range:130},
    {type: "Car",name: "Nissan GT-R",price: 4500,reviews: "42 Reviews", star: 4.5,src: CAR3,features: ["4 Seats", "AC", "Auto", "Petrol"], range:140},
    {type: "Car",name: "Mitsubishi ASX",price: 3750,reviews: "35 Reviews", star: 4.5,src: CAR4,features: ["4 Seats", "AC", "Auto", "Petrol"], range:100},
    // Bikes
    {type: "Bike",name: "Yamaha YZF-R1",price: 1000,reviews: "19 Reviews", star: 4.5,src: BIKE1,features: ["2 Seats", "AC", "Manual", "Petrol"], range:50},
    {type: "Bike",name: "Ducati Panigale V4",price: 1800,reviews: "25 Reviews", star: 4.5,src: BIKE2,features: ["2 Seats", "AC", "Manual", "Petrol"], range:40},
    {type: "Bike",name: "Harley-Davidson 750",price: 1300,reviews: "34 Reviews", star: 4.5,src: BIKE3,features: ["2 Seats", "AC", "Manual", "Petrol"], range:30},
    {type: "Bike",name: "BMW S1000RR",price: 2000,reviews: "29 Reviews", star: 4.5,src: BIKE4,features: ["2 Seats", "AC", "Manual", "Petrol"], range:20},
    // Vans
    {type: "Van",name: "Ford Transit",price: 9000,reviews: "40 Reviews", star: 4.5,src: VAN1,features: ["8 Seats", "AC", "Auto", "Diesel"], range:150},
    {type: "Van",name: "Mercedes-Benz Sprinter",price: 4500,reviews: "37 Reviews", star: 4.5,src: VAN2,features: ["8 Seats", "AC", "Auto", "Diesel"], range:150},
    {type: "Van",name: "Ram ProMaster",price: 5100,reviews: "45 Reviews", star: 4.5,src: VAN3,features: ["8 Seats", "AC", "Auto", "Diesel"], range:160},
    {type: "Van",name: "Nissan NV3500",price: 6000,reviews: "30 Reviews", star: 4.5,src: VAN4,features: ["8 Seats", "AC", "Auto", "Diesel"], range:170},
    // Buses
    {type: "Bus",name: "Mercedes-Benz Tourismo",price: 10000,reviews: "28 Reviews", star: 4.5,src: BUS1,features: ["50 Seats", "AC", "Auto", "Diesel"], range:300},
    {type: "Bus",name: "Volvo 9700",price: 12000,reviews: "32 Reviews", star: 4.5,src: BUS2,features: ["50 Seats", "AC", "Auto", "Diesel"], range:400},
    {type: "Bus",name: "Scania Touring",price: 12000,reviews: "25 Reviews", star: 4.5,src: BUS3,features: ["50 Seats", "AC", "Auto", "Diesel"], range:500},
    {type: "Bus",name: "MAN Lion's Coach",price: 15000,reviews: "35 Reviews", star: 4.5,src: BUS4,features: ["50 Seats", "AC", "Auto", "Diesel"], range:700}
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking submission logic
    console.log(form);
    alert('Booking Submitted!');
  };


  return (
    <div className="booking-page">
      <div className="booking-main">
        <form style={{boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.2)'}} className="booking-form" onSubmit={handleSubmit}>
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
              <input className='first1' type="number" name="seats" value={form.seats} onChange={handleChange} required min="1" max="100" />
            </label> 
          </div>
          <div className="form-row">
            <label className='first'>
              Departure Date:
              <input className='first1' type="date" name="startDate" value={form.startDate} onChange={handleChange} required/>
            </label>
            <label className='first'>
              Arrive Date:
              <input className='first1' type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label className='first'>
              Departure Time:
              <input className='first1' type="time" name="startTime" value={form.startTime}  onChange={handleChange}  required />
            </label>
            <label className='first'>
              Arrive Time:
              <input className='first1' type="time"  name="endTime"  value={form.endTime}  onChange={handleChange}  required />
            </label>
          </div>
          <div className="driver-container">
            <label className='single'>Driver:</label>
            <div className="driver-ratio">
              <label className='second'>
                <input  className='second2' type="radio"  name="driver" value="with-driver"  checked={form.driver === 'with-driver'}  onChange={handleChange} />
                With Driver
              </label>
              <label className='second'> 
                <input className='second2'  type="radio"  name="driver" value="without-driver" checked={form.driver === 'without-driver'}  onChange={handleChange}  />
                Without Driver
              </label>
            </div>
          </div>

          <div className="searchb">
            <button type="submit" className="submit-button">Search</button>
          </div>
        </form>
        <div className='line'></div>
        <div style={{padding:'20px',gap:'20px'}} className='bookv-cards'>
          {vehiclesData.map((vehicle, index) => (
            <div className="bookv-card" key={index}>
              <img src={vehicle.src} alt={vehicle.name} className="bookv-image" />
              <div className='portion1'> 
              <h2>{vehicle.name}</h2>
              <p ><IndianRupee color="#132b75" size={16} /> {vehicle.price} / Day</p>
              <p ><Star color="#132b75" size={16} /> {vehicle.star} / {vehicle.reviews}</p>
              <p ><MapPinned color="#132b75" size={16} /> Extra km fare Rs. {vehicle.price/100} /km after {vehicle.range} kms</p>
              <p > <Timer color="#132b75" size={16} /> Extra time fare Rs. {vehicle.price/25} per 30 mins after 24hr</p>
              <div className="bookv-features">
                {vehicle.features.map((feature, i) => (
                  <div className="feature1" key={i}>{feature}</div>
                ))}
              </div>
              </div>
              <div style={{marginLeft:"40px", marginTop:"40px"}}>
                <p style={{fontSize:"40px", color:"#132b75" , fontFamily:"sans-serif", margin:"10px"}}><IndianRupee color="#132b75" size={30} />{vehicle.price}</p>
                <p style={{color:"#132b75",fontFamily:"sans-serif", margin:"10px"}}>+ ₹{vehicle.price/8 + 3} Taxes & Charges </p>
                <button type="submit" style={{backgroundColor:"#132b75", color:"white", borderRadius:"6px",fontSize:"16px",width:"7rem",padding:"10px",margin:"20px",cursor:"pointer",fontFamily:"sans-serif"}}
                onClick={() => handleBookClick(vehicle)}>
                  Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} vehicle={selectedVehicle} />
    </div>
  );
}

export default Booking;
