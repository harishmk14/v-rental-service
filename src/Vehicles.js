// src/Vehicles.js
import React, { useState } from 'react';
import './styles.css';
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


function Vehicles() {

  
  const vehiclesData = [
    // Cars
    {type: "Car",name: "Honda Jazz",price: 2500,reviews: "23 Reviews", star: 4.5,src: CAR1,features: ["4 Seats", "AC", "Auto", "Petrol"]},
    {type: "Car",name: "Volkswagen Vento",price: 2700,reviews: "76 Reviews", star: 4.5,src: CAR2,features: ["4 Seats", "AC", "Auto", "Petrol"]},
    {type: "Car",name: "Nissan GT-R",price: 4500,reviews: "42 Reviews", star: 4.5,src: CAR3,features: ["4 Seats", "AC", "Auto", "Petrol"]},
    {type: "Car",name: "Mitsubishi ASX",price: 3750,reviews: "35 Reviews", star: 4.5,src: CAR4,features: ["4 Seats", "AC", "Auto", "Petrol"]},
    // Bikes
    {type: "Bike",name: "Yamaha YZF-R1",price: 1000,reviews: "19 Reviews", star: 4.5,src: BIKE1,features: ["2 Seats", "AC", "Manual", "Petrol"]},
    {type: "Bike",name: "Ducati Panigale V4",price: 1800,reviews: "25 Reviews", star: 4.5,src: BIKE2,features: ["2 Seats", "AC", "Manual", "Petrol"]},
    {type: "Bike",name: "Harley-Davidson 750",price: 1300,reviews: "34 Reviews", star: 4.5,src: BIKE3,features: ["2 Seats", "AC", "Manual", "Petrol"]},
    {type: "Bike",name: "BMW S1000RR",price: 2000,reviews: "29 Reviews", star: 4.5,src: BIKE4,features: ["2 Seats", "AC", "Manual", "Petrol"]},
    // Vans
    {type: "Van",name: "Ford Transit",price: 9000,reviews: "40 Reviews", star: 4.5,src: VAN1,features: ["8 Seats", "AC", "Auto", "Diesel"]},
    {type: "Van",name: "Mercedes-Benz Sprinter",price: 4500,reviews: "37 Reviews", star: 4.5,src: VAN2,features: ["8 Seats", "AC", "Auto", "Diesel"]},
    {type: "Van",name: "Ram ProMaster",price: 5100,reviews: "45 Reviews", star: 4.5,src: VAN3,features: ["8 Seats", "AC", "Auto", "Diesel"]},
    {type: "Van",name: "Nissan NV3500",price: 6000,reviews: "30 Reviews", star: 4.5,src: VAN4,features: ["8 Seats", "AC", "Auto", "Diesel"]},
    // Buses
    {type: "Bus",name: "Mercedes-Benz Tourismo",price: 10000,reviews: "28 Reviews", star: 4.5,src: BUS1,features: ["50 Seats", "AC", "Auto", "Diesel"]},
    {type: "Bus",name: "Volvo 9700",price: 12000,reviews: "32 Reviews", star: 4.5,src: BUS2,features: ["50 Seats", "AC", "Auto", "Diesel"]},
    {type: "Bus",name: "Scania Touring",price: 12000,reviews: "25 Reviews", star: 4.5,src: BUS3,features: ["50 Seats", "AC", "Auto", "Diesel"]},
    {type: "Bus",name: "MAN Lion's Coach",price: 15000,reviews: "35 Reviews", star: 4.5,src: BUS4,features: ["50 Seats", "AC", "Auto", "Diesel"]}
  ];

  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);
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
    let filtered = vehiclesData;

    if (filters.price) {
      const priceLimit = parseInt(filters.price);
      filtered = filtered.filter(vehicle => vehicle.price <= priceLimit);
    }

    if (filters.brand) {
      filtered = filtered.filter(vehicle => vehicle.name.toLowerCase().includes(filters.brand.toLowerCase()));
    }

    if (filters.type) {
      filtered = filtered.filter(vehicle => vehicle.type === filters.type);
    }

    if (filters.rating) {
      const ratingLimit = parseInt(filters.rating);
      filtered = filtered.filter(vehicle => parseInt(vehicle.reviews.split(" ")[0]) >= ratingLimit);
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
          <select name="brand" value={filters.brand} onChange={handleFilterChange}>
            <option value="">All Brands</option>
            <option value="Honda">Honda</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Ducati">Ducati</option>
            <option value="Harley-Davidson">Harley-Davidson</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Ram">Ram</option>
            <option value="Nissan">Nissan</option>
            <option value="Volvo">Volvo</option>
            <option value="Scania">Scania</option>
            <option value="MAN">MAN</option>
          </select>
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
          </select>
          <select name="rating" value={filters.rating} onChange={handleFilterChange}>
            <option value="">All Ratings</option>
            <option value="10">10+ Reviews</option>
            <option value="20">20+ Reviews</option>
            <option value="30">30+ Reviews</option>
            <option value="40">40+ Reviews</option>
          </select>
          <button onClick={applyFilters}>Apply Filters</button>
        </div>
        <div className="vehicle-cards">
          {filteredVehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index}>
              <img src={vehicle.src} alt={vehicle.name} className="vehicle-image" />
              <h2>{vehicle.name}</h2>
              <p className="vehicle-price">Rs. {vehicle.price} / Day</p>
              <p className="vehicle-reviews">{vehicle.star} ⭐/ {vehicle.reviews}</p>
              <div className="vehicle-features">
                {vehicle.features.map((feature, i) => (
                  <div className="feature" key={i}>{feature}</div>
                ))}
              </div>
              <div className="renttest">
              <button className="test-button">Testimonial</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
