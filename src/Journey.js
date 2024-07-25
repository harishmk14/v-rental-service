// src/Journey.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import CAR1 from '../src/img/Honda_Jazz.png';
import CAR2 from '../src/img/Volkswagen_Vento.png'
import CAR3 from '../src/img/Nissan_GT-R.png'
import CAR4 from '../src/img/MitsubishiASX.png'
import { Armchair, Snowflake, Cog, Fuel, PaintBucket, Calendar, RectangleEllipsis, ArrowUpDown } from 'lucide-react';

function Journey() {
  const location = useLocation();
  const initialStatus = location.state?.status || 'Journey Starts';
  const [status, setStatus] = useState(initialStatus);

  const vehiclesData = [
    // Cars
    {type: "Car",name: "Honda Jazz",price: 2500,reviews: "23 Reviews", star: 4.5,src: CAR1,features: ["4 Seats", "AC", "Auto", "Petrol"],additional: ["Red", "2019", "Py02H0001", "Toll Free"], range:120},
    {type: "Car",name: "Volkswagen Vento",price: 2700,reviews: "76 Reviews", star: 4.5,src: CAR2,features: ["4 Seats", "AC", "Auto", "Petrol"],additional: ["Blue", "2016", "Py02H0003", "Toll Free"], range:130},
    {type: "Car",name: "Nissan GT-R",price: 4500,reviews: "42 Reviews", star: 4.5,src: CAR3,features: ["4 Seats", "AC", "Auto", "Petrol"],additional: ["Black", "2017", "Py02H0489", "Toll Free"], range:140},
    {type: "Car",name: "Mitsubishi ASX",price: 3750,reviews: "35 Reviews", star: 4.5,src: CAR4,features: ["4 Seats", "AC", "Auto", "Petrol"],additional: ["white", "2020", "Py02H2651", "Toll Free"], range:100}
  ];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
  }, [location.state]);

  return (
    <div className='journey_page'>
      <div className='journey_sidebar'>
        <div>
          <h1 style={{ textAlign: "center", color: "#132b75" }}>Booking Status</h1>
        </div>
        <div className='verticalbar'>
          <ul>
            <li className={status === 'Journey Starts' ? 'active' : ''} onClick={() => handleStatusChange('Journey Starts')}><span>Ongoing Journey</span></li>
            <li className={status === 'Pending' ? 'active' : ''} onClick={() => handleStatusChange('Pending')}><span>In Progress</span></li>
            <li className={status === 'Completed' ? 'active' : ''} onClick={() => handleStatusChange('Completed')}><span>Completed</span></li>
          </ul>
        </div>
      </div>
      <div className='journey_cards'>
        {vehiclesData.map((vehicle, index) => (
          <div className='journey_card' key={index}>
            <div style={{ width: "25%" }} className='journey_card_row'>
              <img src={vehicle.src} alt={vehicle.name} />
            </div>
            <div style={{ width: "25%" }} className='journey_card_row'>
              <h2 style={{ color: "#132b75" }}>{vehicle.name}</h2>
              <div style={{ display: "flex", paddingBottom: "15px" }}>
                <div style={{ display: "flex", marginTop: "5px", flexDirection: "column", rowGap: "20px" }}>
                  <Armchair color="#132b75" size={16} />
                  <Snowflake color="#132b75" size={16} />
                  <Cog color="#132b75" size={16} />
                  <Fuel color="#132b75" size={16} />
                </div>
                <div style={{ display: "flex", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                  {vehicle.features.map((feature, i) => (
                    <p style={{ margin: "0px", color: "#132b75" }} key={i}>{feature}</p>
                  ))}
                </div>
                <div style={{ display: "flex", marginTop: "5px", flexDirection: "column", rowGap: "20px", paddingLeft: "25px" }}>
                  <PaintBucket color="#132b75" size={16} />
                  <Calendar color="#132b75" size={16} />
                  <RectangleEllipsis color="#132b75" size={16} />
                  <ArrowUpDown color="#132b75" size={16} />
                </div>
                <div style={{ display: "flex", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                  {vehicle.additional.map((additional, i) => (
                    <p style={{ margin: "0px", color: "#132b75" }} key={i}>{additional}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className='journey_card_row'>
              <h3 style={{ color: "#132b75", paddingTop: "10px" }}>Booked By</h3>
              <div style={{ display: "flex", paddingTop: "2px" }}>
                <div style={{ display: "flex", flexDirection: "column", rowGap: "13px" }}>
                  <p style={{ margin: "0px", color: "#132b75" }}>Name</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>Departure Date</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>Arrive Date</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>Driver</p>
                </div>
                <div style={{ paddingLeft: "10px", display: "flex", flexDirection: "column", rowGap: "13px" }}>
                  <p style={{ margin: "0px", color: "#132b75" }}>: Harish</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>: 18 / 02 / 2024</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>: 18 / 03 / 2024</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>: Included</p>
                </div>
              </div>
            </div>
            <div style={{ margin: "0px 20px 0px 20px" }} className='journey_card_row'>
              <h1 style={{ padding: "20px 20px 0px 20px", color: "#132b75" }}>{status}</h1>
              <div style={{ padding: "0px 20px 0px 20px" }}>
                <h2 style={{ color: "#132b75" }}>Payment Status:</h2>
                <h3 style={{ color: "#132b75" }}>Paid</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
