import React, { useState } from 'react';
import {toast } from 'react-toastify';

import './styles.css';

const VehicleModal = ({ show, onClose }) => {
  
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
  
    const handleAdd = async () => {
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
          const response = await fetch('http://localhost:2000/cars/add/cars', {
            method: 'POST',
            body: formData,
          });
          
          const data = await response.json();
          
          if (response.ok) {
            console.log('Success:', data);
            toast.success("Vehicle data added"); 
            onClose();
           
            handleReset();
       
          } else {
            throw new Error(data.message || "Failed to add vehicle data");
          }
        } catch (error) {
          console.error('Error:', error);
          toast.error("Failed to add vehicle data");
        }
      };
  
    if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="box_fixed" style={{ display: "flex", flexDirection: "column", backgroundColor: "white", height: "36rem", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#132b75" }}>&times;</button>
        <div style={{ display: "flex" }}>
          <h1 style={{ textAlign: "center", color: "#132b75", width: "74rem" }}>Add Vehicle</h1>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "20px", margin: "0px 30px 0px 30px" }}>
          {/* Form fields */}
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
                <option value="Auto">Automatic</option>
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
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5", resize: "vertical" }}
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
                <option value="">Select</option>
                <option value="Toll">Toll</option>
                <option value="No-Toll">No Toll</option>
              </select>
            </div>
          </div>
          {/* Range */}
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div style={{ display: "grid" }}>
              <label>Range</label>
              <input
                type="number"
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
              <label>Image Upload</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ width: "20rem", borderRadius: "5px", padding: "10px", border: "1.5px solid #b6b5b5" }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button onClick={handleAdd} style={{ backgroundColor: "#132b75", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", marginRight: "10px",width:"5rem" }}>Add</button>
          <button onClick={handleReset} style={{ backgroundColor: "#c7c6c6", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer",width:"5rem" }}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
