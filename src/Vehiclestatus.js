import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './Slice/vehicleStatusSlice'; // adjust the path as necessary
import { CalendarArrowDown, CalendarArrowUp, Car, Phone, RectangleEllipsis, User } from 'lucide-react';

const VehicleStatus = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.vehicleStatus);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{display:"flex",flexDirection:"column", backgroundColor:"#f4f4f4",width:"93rem",height:"87vh",padding:"0 16px 16px 15px"}}>
     {bookings.map((booking, index) => (
     <div key={index} style={{display:"flex",width:"93rem",height:"6rem"}}>
      <div style={{display:"flex",backgroundColor:"white",width:"93rem",height:"5rem", marginTop:"1rem", borderRadius:"10px",boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)"}}>
      <div className='vsdfg'>
        <Car size={25}/>
        <RectangleEllipsis size={25}/>
        </div>
        <div className='vsd'>
          <span>D.Place </span>
          <span>Reg no</span>
        </div>
        <div className='vsdf'>
        <span>{booking.departurePlace}</span>
        <span>{booking.carNumber}</span>
        </div>
        <div className='vsdfg'>
        <CalendarArrowUp size={23}/>
        <CalendarArrowDown size={23} />
        </div>
        <div className='vsd'>
        <span>Start Date </span>
        <span>End Date   </span>
        </div>
        <div className='vsdf'>
        <span>{booking.startDate}</span>
        <span>{booking.endDate}</span>
        </div>
        <div className='vsdfg'>
        <User size={25}/>
        <Phone size={22}/>
        </div>
        <div className='vsd'>
        <span>Name    </span>
        <span>Mob No  </span>
        </div>
        <div className='vsdf'>
        <span>{booking.name}</span>
        <span>{booking.mobile}</span>
        </div>
        <div style={{display:"flex", width:"30rem",alignItems:"center",gap:"20px"}}>
          <button className='but' style={{backgroundColor:"#132b75"}}>Start</button>
          <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"8.5rem",height:"3rem",borderRadius:"6px",justifyContent:"center",alignItems:"center"}}>2D:8H:20M</div>
          <button className='but' style={{backgroundColor:"red"}}>stop</button>
          <button className='but' style={{backgroundColor:"#22ff22"}}>Completed</button>
        </div>
      </div>
     </div>
           ))}
    </div>
  );
};

export default VehicleStatus;
