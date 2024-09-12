import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './styles.css';
import { Armchair, Snowflake, Cog, Fuel, PaintBucket, Calendar, RectangleEllipsis, ArrowUpDown } from 'lucide-react';
import { fetchBookings } from './Slice/vehicleStatusSlice';
import { fetchVehicles } from './Slice/vehicleDataSlice';
import { fetchUserData } from './Slice/userSlice';
import omg from './img/omg1.png'

function Journey() {
  const location = useLocation();
  const initialStatus = location.state?.status || 'Journey Starts';
  const [status, setStatus] = useState(initialStatus);
  const dispatch = useDispatch();

  // Get userId from local storage
  const userId = localStorage.getItem('loggedInUserId');

  // Fetch the user data using the userId
  const { data: user } = useSelector((state) => state.user);
  const { bookings, loading: bookingsLoading } = useSelector((state) => state.vehicleStatus);
  const { vehicles } = useSelector((state) => state.vehicleData);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const filterBookingsByStatus = (booking) => {
    if (status === 'Journey Starts') {
      return booking.status === 'Incompleted' || booking.status === 'Journey Start';
    } else if (status === 'Pending') {
      return booking.status === 'Pending';
    } else if (status === 'Completed') {
      return booking.status === 'Completed' || booking.status === 'Cancelled';
    }
    return false;
  };
  
  // Filter the bookings based on the selected status
  const filteredBookings = bookings.filter((booking) => 
    booking.email === user?.email && filterBookingsByStatus(booking)
  );

  // Find the corresponding vehicle data based on the booking car number
  const getVehicleData = (carnumber) => {
    return vehicles.find((vehicle) => vehicle.registrationNumber === carnumber);
  };

  return (
    <div className='journey_page'>
      <div className='journey_sidebar'>
        <div>
          <h1 className='jo1'>Booking Status</h1>
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
        {bookingsLoading ? (
          <p>Loading...</p>
        ) : filteredBookings.length === 0 ? (
          <div className='empty_placeholder'>
            <img src={omg} alt="logo" className='omgimg' />
            <h2 className='zeromargi'>OMG!</h2>
            <p className='zeromargi'>No bookings available for the selected status.</p>
          </div>
        ) : (
          filteredBookings.map((booking, index) => {
            const vehicle = getVehicleData(booking.carNumber);

            return vehicle ? (
              <div className='journey_card' key={index}>
                <div  className='journey_card_row'>
                  <img src={`http://localhost:2000${vehicle.uploadImage}`} alt={vehicle.brandName} />
                </div>
                <div className='journey_card_row'>
                  <h2 style={{ color: "#132b75" }}>{vehicle.brandName}</h2>
                  <div className='jo2'>
                    <div className='jo3'>
                      <Armchair color="#132b75" className='jo4'/>
                      <Snowflake color="#132b75" className='jo4'/>
                      <Cog color="#132b75" className='jo4'/>
                      <Fuel color="#132b75" className='jo4'/>
                    </div>
                    <div className='jo5'>
                      <p className='jo6'>{vehicle.seater}</p>
                      <p className='jo6'>{vehicle.acOrNonAc}</p>
                      <p className='jo6'>{vehicle.gearType}</p>
                      <p className='jo6'>{vehicle.fuelType}</p>
                    </div>
                    <div className='jo7'>
                      <PaintBucket color="#132b75" className='jo4'/>
                      <Calendar color="#132b75" className='jo4'/>
                      <RectangleEllipsis color="#132b75" className='jo4'/>
                      <ArrowUpDown color="#132b75" className='jo4'/>
                    </div>
                    <div className='jo5'>
                      <p className='jo6'>{vehicle.color}</p>
                      <p className='jo6'>{vehicle.model}</p>
                      <p className='jo6'>{vehicle.registrationNumber}</p>
                      <p className='jo6'>{vehicle.tollType}</p>
                    </div>
                  </div>
                </div>
                <div className='journey_card_row'>
                  <h3 className='jo8'>Booked By</h3>
                  <div className='jo9'>
                    <div className='jo10'>
                      <p className='jo6'>Name</p>
                      <p className='jo6'>Departure Date</p>
                      <p className='jo6'>Arrive Date</p>
                      <p className='jo6'>Driver</p>
                    </div>
                    <div className='jo11'>
                      <p className='jo6'>: {booking.name}</p>
                      <p className='jo6'>: {formatDate(booking.startDate)}</p>
                      <p className='jo6'>: {formatDate(booking.endDate)}</p>
                      <p className='jo6'>: Included</p>
                    </div>
                  </div>
                </div>
                <div className='journey_card_row1'>
                  <h1 className='jo12'>{booking.status}</h1>
                  <div className='jo13'>
                    <h2 style={{ color: "#132b75" }}>Payment Status:</h2>
                    <h3 style={{ color: "#132b75" }}>{booking.paymentStatus}</h3>
                  </div>
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
}

export default Journey;
