import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './Slice/vehicleStatusSlice'; // adjust the path as necessary
import { ArrowBigDown, ArrowBigUp, CalendarArrowDown, CalendarArrowUp, ClockArrowDown, ClockArrowUp, FileCheck, IndianRupee, Navigation, Phone, RectangleEllipsis, User, Users } from 'lucide-react';

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
    <div style={{display:"flex",flexDirection:"column", backgroundColor:"#f4f4f4",width:"93rem",minHeight:"87vh",padding:"0 16px 16px 15px"}}>
     {bookings.map((booking, index) => (
     <div key={index} style={{display:"flex",width:"93rem",minHeight:"6rem"}}>
      <div style={{display:"flex",backgroundColor:"white",width:"93rem",minHeight:"5rem", marginTop:"1rem", borderRadius:"10px",boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)"}}>
      <div className='vsdfg'>
        <ArrowBigUp size={25}/>
        <ArrowBigDown size={25}/>
        <RectangleEllipsis size={24}/>
        <Navigation size={23}/>
        </div>
        <div className='vsd'>
          <span>D.Place </span>
          <span>A.Place </span>
          <span>Car No</span>
          <span>Travel</span>
        </div>
        <div className='vsdf'>
        <span>{booking.departurePlace}</span>
        <span>{booking.arrivelPlace}</span>
        <span>{booking.carNumber}</span>
        <span>{booking.travalType}</span>
        </div>
        <div className='vsdfg'>
        <CalendarArrowUp size={23}/>
        <CalendarArrowDown size={23} />
        <ClockArrowUp size={23}/>
        <ClockArrowDown size={23} />
        </div>
        <div className='vsd'>
        <span>Start Date </span>
        <span>End Date   </span>
        <span>Start Time </span>
        <span>End Time   </span>
        </div>
        <div className='vsdf'>
        <span>{booking.startDate}</span>
        <span>{booking.endDate}</span>
        <span>{booking.startTime}</span>
        <span>{booking.endTime}</span>
        </div>
        <div className='vsdfg'>
        <User size={25}/>
        <Users size={25}/>
        <Phone size={22}/>
        <FileCheck size={22}/>
        </div>
        <div className='vsd'>
        <span>Name    </span>
        <span>Persons  </span>
        <span>Mob No   </span>
        <span>Proof  </span>
        </div>
        <div className='vsdf'>
        <span>{booking.name}</span>
        <span>{booking.noOfPersons}</span>
        <span>{booking.mobile}</span>
        <span>{booking.proof}</span>
        </div>
        <div style={{display:"flex", width:"30rem",flexDirection:"column",gap:"3px"}}>
          <div style={{display:"flex", width:"30rem",alignItems:"center",gap:"20px",margin:"15px 0 15px 0"}}>    
            <span style={{color:"#132b75",fontSize:"2rem"}}><IndianRupee/>2800</span>    
            <span style={{color:"#132b75",fontSize:"1.5rem"}}>Payment Status:</span>  
          </div>
          <div style={{display:"flex", width:"30rem",alignItems:"center",gap:"20px",margin:"15px 0 15px 0"}}>          
          <button className='but' style={{backgroundColor:"#132b75"}}>Start</button>
          <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"8.5rem",height:"3rem",borderRadius:"6px",justifyContent:"center",alignItems:"center"}}>2D:8H:20M</div>
          <button className='but' style={{backgroundColor:"red"}}>stop</button>
          <button className='but' style={{backgroundColor:"#22ff22"}}>Completed</button>
          </div>

        </div>
      </div>
     </div>
           ))}
    </div>
  );
};

export default VehicleStatus;
