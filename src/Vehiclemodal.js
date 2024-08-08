// /src/Vehiclemodal.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addVehicle, updateVehicle } from './Slice/vehicleSlice';
import './styles.css';
import { fetchVehicles } from './Slice/vehicleDataSlice';

const VehicleModal = ({ show, onClose, status, vehicle }) => {
  const dispatch = useDispatch();

  const [brandName, setBrandName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [seater, setSeater] = useState("");
  const [acType, setAcType] = useState("");
  const [gearType, setGearType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [color, setColor] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [model, setModel] = useState("");
  const [review, setReview] = useState("");
  const [starRating, setStarRating] = useState("");
  const [tollType, setTollType] = useState("");
  const [range, setRange] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (status === 'Update Vehicle' && vehicle) {
      console.log('Setting vehicle data:', vehicle); // Debugging line
      setBrandName(vehicle.brandName);
      setType(vehicle.type);
      setPrice(vehicle.price);
      setSeater(vehicle.seater);
      setAcType(vehicle.acOrNonAc);
      setGearType(vehicle.gearType);
      setFuelType(vehicle.fuelType);
      setColor(vehicle.color);
      setRegistrationNo(vehicle.registrationNumber);
      setModel(vehicle.model);
      setReview(vehicle.review);
      setStarRating(vehicle.star);
      setTollType(vehicle.tollType);
      setRange(vehicle.range);
      setImage(null); // Assuming you handle image separately
    }
  }, [status, vehicle]);

  const handleReset = () => {
    setBrandName("");
    setType("");
    setPrice("");
    setSeater("");
    setAcType("");
    setGearType("");
    setFuelType("");
    setColor("");
    setRegistrationNo("");
    setModel("");
    setReview("");
    setStarRating("");
    setTollType("");
    setRange("");
    setImage(null);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('brandName', brandName);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('seater', seater);
    formData.append('acOrNonAc', acType);
    formData.append('gearType', gearType);
    formData.append('fuelType', fuelType);
    formData.append('color', color);
    formData.append('registrationNumber', registrationNo);
    formData.append('model', model);
    formData.append('review', review);
    formData.append('star', starRating);
    formData.append('tollType', tollType);
    formData.append('range', range);
    if (image) {
      formData.append('uploadImage', image);
    }
  
    try {
      if (status === 'Add Vehicle') {
        handleReset();
        await dispatch(addVehicle(formData)).unwrap();
        dispatch(fetchVehicles());
        toast.success("Vehicle data added");
      } else if (status === 'Update Vehicle' && vehicle && vehicle._id) { // Ensure you use `_id` if that's the property name
        const updatedData = {
          id: vehicle._id, // Use the correct property for ID
          vehicleData: formData // Wrap formData in `vehicleData` key
        };
        await dispatch(updateVehicle(updatedData)).unwrap();
        dispatch(fetchVehicles());
        toast.success("Vehicle data updated");
        onClose();
        handleReset();
      } else {
        throw new Error('Vehicle data is missing for update');
      }
      onClose();
      handleReset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to submit vehicle data");
    }
  };



  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="box_fixed" style={{ display: "flex", flexDirection: "column", backgroundColor: "white", height: "36rem", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#132b75" }}>&times;</button>
        <div style={{ display: "flex" }}>
          <h1 style={{ textAlign: "center", color: "#132b75", width: "74rem" }}>{status === 'Add Vehicle' ? 'Add Vehicle' : 'Update Vehicle'}</h1>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "20px", margin: "0px 30px 0px 30px" }}>
          {/* Brand Name */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Brand Name</label>
              <input
                type="text"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Type */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{ width: "21.4rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", color: "#827979" }}
              >
                <option value="">Select</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
          </div>
          {/* Price */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Price</label>
              <input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Seater */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Seater</label>
              <input
                type="number"
                placeholder="Enter seater capacity"
                value={seater}
                onChange={(e) => setSeater(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* AC or Non-AC */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>AC or Non-AC</label>
              <select
                value={acType}
                onChange={(e) => setAcType(e.target.value)}
                style={{ width: "21.4rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", color: "#827979" }}
              >
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>
          </div>
          {/* Gear Type */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Gear Type</label>
              <select
                value={gearType}
                onChange={(e) => setGearType(e.target.value)}
                style={{ width: "21.4rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", color: "#827979" }}
              >
                <option value="">Select</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>
          </div>
          {/* Fuel Type */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Fuel Type</label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                style={{ width: "21.4rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", color: "#827979" }}
              >
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
          </div>
          {/* Color */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Color</label>
              <input
                type="text"
                placeholder="Enter color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Registration Number */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Registration Number</label>
              <input
                type="text"
                placeholder="Enter registration number"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Model */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Model</label>
              <input
                type="text"
                placeholder="Enter model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Review */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Review</label>
              <input
                type="number"
                placeholder="Enter review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Star Rating */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Star Rating</label>
              <input
                type="number"
                placeholder="Enter star rating"
                value={starRating}
                onChange={(e) => setStarRating(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Toll Type */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Toll Type</label>
              <select
                value={tollType}
                onChange={(e) => setTollType(e.target.value)}
                style={{ width: "21.4rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", color: "#827979" }}
              >
                <option value="">Toll Type</option>
                <option value="Toll">Toll </option>
                <option value="No-Toll">No-Toll</option>
              </select>
            </div>
          </div>
          {/* Range */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Range</label>
              <input
                type="text"
                placeholder="Enter range"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
          {/* Image Upload */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Upload Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            onClick={handleSubmit}
            style={{ width: "10rem", backgroundColor: "#132b75", color: "white", padding: "10px", borderRadius: "5px", border: "none", marginRight: "10px", cursor: "pointer" }}
          >
            {status === 'Add Vehicle' ? 'Add' : 'Update'}
          </button>
          <button
            onClick={handleReset}
            style={{ width: "10rem", backgroundColor: "#6c757d", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
