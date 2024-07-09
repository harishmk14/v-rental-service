// src/Vehicles.js
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  
  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };
  
  const vehiclesData = [
    // Cars
    {
      type: "Car",
      name: "Honda Jazz",
      price: 250,
      reviews: "23 Reviews",
      src: CAR1,
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      type: "Car",
      name: "Volkswagen Vento",
      price: 270,
      reviews: "76 Reviews",
      src: CAR2,
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      type: "Car",
      name: "Nissan GT-R",
      price: 450,
      reviews: "42 Reviews",
      src: CAR3,
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    {
      type: "Car",
      name: "Mitsubishi ASX",
      price: 375,
      reviews: "35 Reviews",
      src: CAR4,
      features: ["4 Seats", "AC", "Auto", "Petrol"]
    },
    // Bikes
    {
      type: "Bike",
      name: "Yamaha YZF-R1",
      price: 150,
      reviews: "19 Reviews",
      src: BIKE1,
      features: ["2 Seats", "AC", "Manual", "Petrol"]
    },
    {
      type: "Bike",
      name: "Ducati Panigale V4",
      price: 180,
      reviews: "25 Reviews",
      src: BIKE2,
      features: ["2 Seats", "AC", "Manual", "Petrol"]
    },
    {
      type: "Bike",
      name: "Harley-Davidson Street 750",
      price: 130,
      reviews: "34 Reviews",
      src: BIKE3,
      features: ["2 Seats", "AC", "Manual", "Petrol"]
    },
    {
      type: "Bike",
      name: "BMW S1000RR",
      price: 200,
      reviews: "29 Reviews",
      src: BIKE4,
      features: ["2 Seats", "AC", "Manual", "Petrol"]
    },
    // Vans
    {
      type: "Van",
      name: "Ford Transit",
      price: 300,
      reviews: "40 Reviews",
      src: VAN1,
      features: ["8 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Van",
      name: "Mercedes-Benz Sprinter",
      price: 320,
      reviews: "37 Reviews",
      src: VAN2,
      features: ["8 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Van",
      name: "Ram ProMaster",
      price: 310,
      reviews: "45 Reviews",
      src: VAN3,
      features: ["8 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Van",
      name: "Nissan NV3500",
      price: 305,
      reviews: "30 Reviews",
      src: VAN4,
      features: ["8 Seats", "AC", "Auto", "Diesel"]
    },
    // Buses
    {
      type: "Bus",
      name: "Mercedes-Benz Tourismo",
      price: 500,
      reviews: "28 Reviews",
      src: BUS1,
      features: ["50 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Bus",
      name: "Volvo 9700",
      price: 520,
      reviews: "32 Reviews",
      src: BUS2,
      features: ["50 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Bus",
      name: "Scania Touring",
      price: 510,
      reviews: "25 Reviews",
      src: BUS3,
      features: ["50 Seats", "AC", "Auto", "Diesel"]
    },
    {
      type: "Bus",
      name: "MAN Lion's Coach",
      price: 530,
      reviews: "35 Reviews",
      src: BUS4,
      features: ["50 Seats", "AC", "Auto", "Diesel"]
    }
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
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#vehicles">Vehicles</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="#payment">Payment</a></li>
            <li><a href="#journy">Your Journy</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn" onClick={handleSignIn}>Sign In</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>
      <main className="vehicle-main">
        <div className="filters">
          <select name="price" value={filters.price} onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="200">Up to $200</option>
            <option value="300">Up to $300</option>
            <option value="400">Up to $400</option>
            <option value="500">Up to $500</option>
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
              <p className="vehicle-price">${vehicle.price}/ Day</p>
              <p className="vehicle-reviews">⭐ {vehicle.reviews}</p>
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
      </main>
    </div>
  );
}

export default Vehicles;
