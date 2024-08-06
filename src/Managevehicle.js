import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicles } from './Slice/vehicleDataSlice'; // Import the thunk
import { ArrowUpNarrowWideIcon, CarFront, ChevronRight, IndianRupee, LandPlot, PlusIcon, Star, Armchair, Snowflake, Cog, Fuel, PaintBucket, Calendar, RectangleEllipsis, ArrowUpDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import Modal from './Vehiclemodal';

const ManageVehicle = () => {
  const location = useLocation();
  const initialStatus = location.state?.status || 'Add Vehicle';
  const [status, setStatus] = useState(initialStatus);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // New state for selected vehicle

  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicleData.vehicles);
  const vehicleStatus = useSelector((state) => state.vehicleData.status);

  useEffect(() => {
    if (vehicleStatus === 'idle') {
      dispatch(fetchVehicles());
    }
  }, [vehicleStatus, dispatch]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
  }, [location.state]);

  const handleplusClick = () => {
    setShowModal(true);
    setSelectedVehicle(null); // Clear selected vehicle when adding a new one
  };

  const handleUpdateClick = (vehicle) => {
    setSelectedVehicle(vehicle); // Set the selected vehicle for updating
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVehicle(null); // Clear selected vehicle when modal is closed
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: status === 'Add Vehicle' ? "5rem 0 0 15px" : "1rem 0 0 15px"
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="managev_sidebar" style={{ boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)" }}>
        <div>
          <h1 style={{ textAlign: "center", color: "#132b75" }}>Manage Vehicle</h1>
        </div>
        <div className='verticalbar'>
          <ul style={{cursor:"pointer"}}>
            <li className={status === 'Add Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Add Vehicle')}><span>Add Vehicle</span></li>
            <li className={status === 'Update Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Update Vehicle')}><span>Update Vehicle</span></li>
            <li className={status === 'Delete Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Delete Vehicle')}><span>Delete Vehicle</span></li>
          </ul>
        </div>
      </div>

      <div className="managev_cards">
        {status === 'Add Vehicle' && (
          <div style={{ display: "flex", width: "74.7rem", justifyContent: "end", backgroundColor: "#f4f4f4", position: "fixed", zIndex: "1", overflow: "auto", marginLeft: "10px" }}>
            <div style={{ display: "flex", height: "3rem", width: "3rem", backgroundColor: "#132b75", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", margin: "15px 5px 7.5px 0", alignItems: "center", justifyContent: "center" }}>
              <PlusIcon color="white" size={30} style={{ cursor: "pointer" }} onClick={handleplusClick} />
            </div>
          </div>
        )}

        <div style={cardContainerStyle}>
          {vehicles.map((vehicle) => (
            <div key={vehicle.registrationNumber} style={{ display: "flex", height: "12.5rem", width: "73rem", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", marginBottom: "15px", paddingLeft: "1rem" }}>
<div style={{ display: "flex", width: "18rem" }}>
                <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.brandName} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "14.25rem" }}>
                <div style={{ display: "flex", paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem" }}>
                  <div style={{ display: "flex", marginTop: "5px", paddingLeft: "15px", flexDirection: "column", rowGap: "20px" }}>
                    <ChevronRight color="#132b75" size={18} />
                    <CarFront color="#132b75" size={18} />
                    <IndianRupee color="#132b75" size={18} />
                    <LandPlot color="#132b75" size={18} />
                  </div>
                  <div style={{ display: "flex", marginTop: "3px", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                    <span>{vehicle.brandName}</span>
                    <span>{vehicle.type}</span>
                    <span>{vehicle.price}</span>
                    <span>{vehicle.range} Km</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", width: "13.25rem" }}>
                <div style={{ display: "flex", paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem" }}>
                  <div style={{ display: "flex", marginTop: "5px", paddingLeft: "15px", flexDirection: "column", rowGap: "20px" }}>
                    <Armchair color="#132b75" size={18} />
                    <Snowflake color="#132b75" size={18} />
                    <Cog color="#132b75" size={18} />
                    <Fuel color="#132b75" size={18} />
                  </div>
                  <div style={{ display: "flex", marginTop: "3px", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                    <span>{vehicle.seater} seater</span>
                    <span>{vehicle.acOrNonAc}</span>
                    <span>{vehicle.gearType}</span>
                    <span>{vehicle.fuelType}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", width: "13.25rem" }}>
                <div style={{ display: "flex", paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem" }}>
                  <div style={{ display: "flex", marginTop: "5px", paddingLeft: "15px", flexDirection: "column", rowGap: "20px" }}>
                    <PaintBucket color="#132b75" size={18} />
                    <Calendar color="#132b75" size={18} />
                    <RectangleEllipsis color="#132b75" size={18} />
                    <ArrowUpDown color="#132b75" size={18} />
                  </div>
                  <div style={{ display: "flex", marginTop: "3px", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                    <span>{vehicle.color}</span>
                    <span>{vehicle.model}</span>
                    <span>{vehicle.registrationNumber}</span>
                    <span>{vehicle.tollType}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", width: "13.25rem" }}>
                <div style={{ display: "flex", paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem" }}>
                  <div style={{ display: "flex", marginTop: "5px", paddingLeft: "15px", flexDirection: "column", rowGap: "20px" }}>
                    <ArrowUpNarrowWideIcon color="#132b75" size={18} />
                    <Star color="#132b75" size={18} />
                  </div>
                  <div style={{ display: "flex", marginTop: "3px", paddingLeft: "15px", flexDirection: "column", rowGap: "13px" }}>
                    <span>{vehicle.review} Reviews</span>
                    <span>{vehicle.star} Ratings</span>
                    <div>
                      {status === 'Update Vehicle' && (
                        <button 
                          style={{ marginTop: '20px',padding:"10px",width:"6rem",borderRadius:"6px", color:"white",border:"none",backgroundColor:"#132b75", cursor:"pointer" }} 
                          onClick={() => handleUpdateClick(vehicle)}
                        >
                          Update
                        </button>
                      )}
                      {status === 'Delete Vehicle' && (
                        <button style={{ marginTop: '20px',padding:"10px",width:"6rem",borderRadius:"6px", color:"white",border:"none",backgroundColor:"#132b75", cursor:"pointer" }}>Delete</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} vehicle={selectedVehicle} status={status} /> {/* Pass selectedVehicle to the modal */}
    </div>
  );
};

export default ManageVehicle;


