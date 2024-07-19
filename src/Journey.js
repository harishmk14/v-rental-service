// src/journey.js
import React, { useState } from 'react';
import './styles.css';
import CAR1 from '../src/img/Honda_Jazz.png';
import { Armchair, Snowflake, Cog, Fuel, PaintBucket, Calendar, RectangleEllipsis, ArrowUpDown } from 'lucide-react';

function Journey() {
  const [status, setStatus] = useState('Journey Starts');

  const vehiclesData = [
    // Cars
    {type: "Car",name: "Honda Jazz",price: 2500,reviews: "23 Reviews", star: 4.5,src: CAR1,features: ["4 Seats", "AC", "Auto", "Petrol"],additional: ["Red", "2019", "Py02H0001", "Toll Free"], range:120}
  ];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className='journey_page'>
      <div className='journey_sidebar'>
        <div>
          <h1 style={{ textAlign: "center", color: "#132b75" }}>Booking Status</h1>
        </div>
        <div className='verticalbar'>
          <ul>
            <li onClick={() => handleStatusChange('Journey Starts')}><span>Ongoing Journey</span></li>
            <li onClick={() => handleStatusChange('Pending')}><span>In Progress</span></li>
            <li onClick={() => handleStatusChange('Completed')}><span>Completed</span></li>
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