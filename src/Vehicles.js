// src/Vehicles.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicles } from './Slice/vehicleDataSlice';
import './styles.css';
function Vehicles() {
  const dispatch = useDispatch();
  const { vehicles} = useSelector((state) => state.vehicleData);

  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles]);

  const [filters, setFilters] = useState({
    price: '',
    brand: '',
    type: '',
    rating: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const applyFilters = () => {
    let filtered = vehicles;
  
    if (filters.price) {
      const priceLimit = parseInt(filters.price);
      filtered = filtered.filter(vehicle => vehicle.price <= priceLimit);
    }
  
    if (filters.type) {
      filtered = filtered.filter(vehicle => vehicle.type === filters.type);
    }
  
    setFilteredVehicles(filtered);
  };

  return (
    <div className="vehicles-page">
      <div className="vehicle-main">
        <div className="filters">
        <select name="price" value={filters.price} onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="1000">Up to 1000</option>
            <option value="2000">Up to 2000</option>
            <option value="3000">Up to 3000</option>
            <option value="5000">Up to 5000</option>
            <option value="10000">Up to 10000</option>
            <option value="15000">Up to 15000</option>
          </select>
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
          </select>
          <button onClick={applyFilters}>Apply Filters</button>
        </div>
        <div className="vehicle-cards">
          {filteredVehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index}>
              <div>
              <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.name} className="vehicle-image" />
              </div>
              <h2>{vehicle.brandName}</h2>
              <p className="vehicle-price">Rs. {vehicle.price} / Day</p>
              <p className="vehicle-reviews">{vehicle.star} ⭐/ {vehicle.review} Reviews</p>
              <div className="vehicle-features">
                  <div className="feature">{vehicle.seater} Seats</div>
                  <div className="feature">{vehicle.acOrNonAc}</div>
                  <div className="feature">{vehicle.gearType}</div>
                  <div className="feature">{vehicle.fuelType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;

          
          