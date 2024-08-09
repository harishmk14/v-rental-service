// src/Journey.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from './Slice/vehicleDataSlice';
import './styles.css';
import { Armchair, Snowflake, Cog, Fuel, PaintBucket, Calendar, RectangleEllipsis, ArrowUpDown } from 'lucide-react';

function Journey() {
  const location = useLocation();
  const initialStatus = location.state?.status || 'Journey Starts';
  const [status, setStatus] = useState(initialStatus);

  const dispatch = useDispatch();
  const vehiclesData = useSelector((state) => state.vehicleData.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

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
              <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.brandName} />
            </div>
            <div style={{ width: "25%" }} className='journey_card_row'>
              <h2 style={{ color: "#132b75" }}>{vehicle.brandName}</h2>
              <div style={{ display: "flex", paddingBottom: "15px" }}>
                <div style={{ display: "flex", marginTop: "5px", flexDirection: "column", rowGap: "20px" }}>
                  <Armchair color="#132b75" size={16} />
                  <Snowflake color="#132b75" size={16} />
                  <Cog color="#132b75" size={16} />
                  <Fuel color="#132b75" size={16} />
                </div>
                <div style={{ display: "flex", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.seater}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.acOrNonAc}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.gearType}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.fuelType}</p>
                </div>
                <div style={{ display: "flex", marginTop: "5px", flexDirection: "column", rowGap: "20px", paddingLeft: "25px" }}>
                  <PaintBucket color="#132b75" size={16} />
                  <Calendar color="#132b75" size={16} />
                  <RectangleEllipsis color="#132b75" size={16} />
                  <ArrowUpDown color="#132b75" size={16} />
                </div>
                <div style={{ display: "flex", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.color}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.model}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.registrationNumber}</p>
                  <p style={{ margin: "0px", color: "#132b75" }}>{vehicle.tollType}</p>
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
