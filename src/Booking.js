import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles, filterVehicles } from './Slice/vehicleDataSlice';
import './styles.css';
import Modal from './Bookmodal';
import { Timer, Star, IndianRupee, MapPinned, X } from 'lucide-react';
import omg from './img/omg1.png'

function Booking() {
  const dispatch = useDispatch();
  const { vehicles } = useSelector((state) => state.vehicleData);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [form, setForm] = useState({
    vehicleType: '',
    seats: '',
    startDate: '',
    endDate: '',
    priceRange: 1000, // Initial price range value
    driver: 'with-driver',
  });
  const [totDays, setTotDays] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [fromandend, setFromAndEnd] = useState({});
  const handleSearch = () => {
    const { startDate, endDate } = form;
    setFromAndEnd({ startDate, endDate });
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffInMilliseconds = date2 - date1;
    const totalDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    setTotDays(totalDays);

    dispatch(filterVehicles({ startDate, endDate, priceRange: form.priceRange, vehicleType: form.vehicleType }));
  };

  const handleBookClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVehicle(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }} className='booking_page'>
      {/* Show hamburger menu only on smaller screens */}
      <button className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? <X style={{background:"none"}}/> : <h6 style={{margin:"0"}}>Filter</h6>} {/* Toggle between Menu and X icon */}
      </button>
      <div className={`search_area ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <h1 className='abc13'>Search Vehicle</h1>
        </div>
        <div className='search_row'>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>  
              Vehicle Type:
              <select className='abc14' name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
                <option value="">All</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
              </select>
            </label>
          </div>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Number of Seats:
              <input type="number" name="seats" value={form.seats} onChange={handleChange} required min="1" max="50" />
            </label>
          </div>
        </div>
        <div className='search_row'>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Departure Date:
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
            </label>
          </div>
          <div className='search_col'>
            <label style={{ color: "#132b75" }}>
              Arrival Date:
              <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
            </label>
          </div>
        </div>
        <div className='search_row'>
            <label style={{ color: "#132b75" }}>
              Price Range:
              <input 
                type="range" 
                name="priceRange" 
                value={form.priceRange} 
                min="1000" 
                max="50000" 
                step="100" 
                onChange={handleChange} 
                className='price-range-slider'
              />
              <span className="price-range-value">₹{form.priceRange}</span>
            </label>
        </div>
        <div className='search_driver'>
          <label style={{ color: "#132b75" }}>Driver:</label>
          <div className='driver_rad'>
            <label style={{ color: "#132b75" }}>
              <input type="radio" name="driver" value="with-driver" checked={form.driver === 'with-driver'} onChange={handleChange} />
              With Driver
            </label>
          </div>
          <div className='driver_rad'>
            <label style={{ color: "#132b75" }}>
              <input type="radio" name="driver" value="without-driver" checked={form.driver === 'without-driver'} onChange={handleChange} />
              Without Driver
            </label>
          </div>
        </div>
        <div className='search_button'>
          <button style={{ color: "white", padding: "10px", width: "100px", borderRadius: "5px", backgroundColor: "#132b75", border: "none", cursor: "pointer" }} type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div  className='bookv-cards'>
        {vehicles.length === 0 ? (
                    <div className='empty_placeholder'>
                    <img src={omg} alt="logo" className='omgimg' />
                    <h2 className='zeromargi'>OMG!</h2>
                    <p className='zeromargi'>No vehicles available for the selected dates or filters.</p>
                  </div>
        ) : (
          vehicles.map((vehicle, index) => {
            const totAmount = (vehicle.price * totDays) + (vehicle.price / 8 + 3);
            const tax = (vehicle.price / 8 + 3);

          return (
            <div className="bookv-card" key={index}>
              <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.brandName} />
              <div className='portion1'>
                <h2>{vehicle.brandName}</h2>
                <p><IndianRupee color="#132b75" className='iconbook' /> {vehicle.price} / Day</p>
                <p><Star color="#132b75" className='iconbook' /> {vehicle.star} / {vehicle.review}</p>
                <p><MapPinned color="#132b75" className='iconbook' /> Extra km fare Rs. {vehicle.price / 100} /km after {vehicle.range} kms</p>
                <p><Timer color="#132b75" className='iconbook' /> Extra time fare Rs. {vehicle.price / 25} per 30 mins after 24hr</p>
                <div className="bookv-features">
                  <div className="feature1">{vehicle.seater} Seats</div>
                  <div className="feature1">{vehicle.acOrNonAc}</div>
                  <div className="feature1">{vehicle.gearType}</div>
                  <div className="feature1">{vehicle.fuelType}</div>
                </div>
              </div>
              <div className='abc11'>
                <p className='abc22'>
                  <IndianRupee color="#132b75" className='iconrs' />
                  {totDays === null || isNaN(totDays) ? vehicle.price : totAmount - tax}
                </p>
                <p className='abc12'>+ ₹{tax} Taxes & Charges</p>
                <button type="submit" className='abc18'
                  onClick={() => handleBookClick(vehicle)}>
                  Book
                </button>
              </div>
            </div>
          );
        })
        )}
      </div>
      <Modal show={showModal} onClose={handleCloseModal} vehicle={selectedVehicle} dates={fromandend} on={totDays} />
    </div>
  );
}

export default Booking;
