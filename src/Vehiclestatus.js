import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, updateBooking } from './Slice/vehicleStatusSlice'; // adjust the path as necessary
import {
  ArrowBigDown,
  ArrowBigUp,
  CalendarArrowDown,
  CalendarArrowUp,
  ClockArrowDown,
  ClockArrowUp,
  FileCheck,
  IndianRupee,
  Navigation,
  Phone,
  RectangleEllipsis,
  User,
  Users,
  MoreVertical, // Icon for the menu
  X, // Close icon
} from 'lucide-react';

const VehicleStatus = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.vehicleStatus);

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [selectedBookingId, setSelectedBookingId] = useState(null); // New state for the selected booking ID

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesFormatted} ${ampm}`;
  };

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const openModal = (bookingId) => {
    setSelectedBookingId(bookingId); // Set the selected booking ID
    setModalIsOpen(true);
    setDropdownVisible(null); // Close the dropdown when opening the modal
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAdvanceAmount(""); // Clear input on modal close
    setSelectedBookingId(null); // Clear the selected booking ID
  };


  const handleStartClick = (bookingId) => {
    const now = new Date();
    const formattedTime = formatTime(now);

    const updateData = {
      status: 'Journey Start',
      startTime: formattedTime,
    };

    dispatch(updateBooking({ bookingId, updateData }))
      .then(() => {})
      .catch((error) => {});
  };

  const handleStopClick = (bookingId, bSd, bEd, bSt, bEt, dy, ta, tax) => {
    
    const now = new Date();
    const formattedTime = formatTime(now);
    const formattedDate = now.toISOString().split('T')[0];
    
    // Create date-time strings
    const dateTime1String = `${bSd} ${bSt}`;
    const dateTime2String = `${bEd} ${bEt}`;
    
    // Function to parse date-time strings
    function parseDateTime(dateTimeString) {
      const [datePart, timePart] = dateTimeString.split(" ");
      let [day, month, year] = datePart.split("-");
      let [hours, minutes] = timePart.split(":");
      const period = timePart.split(" ")[1]; // AM or PM
  
      // Zero-pad month and day
      month = month.padStart(2, '0');
      day = day.padStart(2, '0');
  
      // Convert hours based on AM/PM
      hours = parseInt(hours, 10);
      if (period === "PM" && hours !== 12) {
          hours += 12;
      } else if (period === "AM" && hours === 12) {
          hours = 0;
      }
  
      // Zero-pad hours
      hours = hours.toString().padStart(2, '0');
  
      // Return Date object in ISO format
      return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  }
    
    // Parse date-time strings
    const dateTime1 = parseDateTime(dateTime1String);
    const dateTime2 = parseDateTime(dateTime2String);
    
    if (isNaN(dateTime1) || isNaN(dateTime2)) {
      console.error('Invalid date-time format');
      return;
    }
    
    // Calculate the difference
    const diffInMilliseconds = dateTime2 - dateTime1;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const days = Math.floor(diffInMinutes / (60 * 24));
    const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
    const minutes = diffInMinutes % 60;
    const rem = (days - dy);
    const updy = (days + dy);
    const uptotamount = rem * ((ta-tax)/dy);
    const upto = uptotamount + ta;
    
    // Update booking status
    const updateData = {
      status: 'Incompleted',
      endTime: formattedTime,
      endDate: formattedDate,
      totalTime: `${days}d ${hours}h ${minutes}m`,
      numberOfDate: updy,
      totalAmount: upto, // Add duration to updateData if needed
    };
    
    dispatch(updateBooking({ bookingId, updateData }))
      .then(() => {})
      .catch((error) => {});
  };
  
  

  const handleCancelClick = (bookingId) => {
    const updateData = {
      status: 'Cancelled',
      paymentStatus: 'None',
    };

    dispatch(updateBooking({ bookingId, updateData }))
      .then(() => {})
      .catch((error) => {});
  };

  const handleCompleteClick = (bookingId) => {
    const updateData = {
      status: 'Completed',
      paymentStatus: 'Paid',
    };

    dispatch(updateBooking({ bookingId, updateData }))
      .then(() => {})
      .catch((error) => {});
  };

  
  
  const handleAdvanceSubmit = () => {
    if (!selectedBookingId) return;

    const updateData = { advanceAmount: advanceAmount };

    dispatch(updateBooking({ bookingId: selectedBookingId, updateData }))
      .then((response) => {
        if (!response.error) {
        }
      });

    closeModal();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f4', width: '93rem', minHeight: '87vh', padding: '0 16px 16px 15px' }}>
      {bookings
      .filter(booking => booking.status !== 'Cancelled' && booking.status !== 'Completed' )
      .map((booking, index) => (
        <div key={index} style={{ display: 'flex', width: '93rem', minHeight: '6rem' }}>
          <div style={{ display: 'flex', backgroundColor: 'white', width: '93rem', minHeight: '5rem', marginTop: '1rem', borderRadius: '10px', boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)' }}>
            <div className='vsdfg'>
              <ArrowBigUp size={25} />
              <ArrowBigDown size={25} />
              <RectangleEllipsis size={24} />
              <Navigation size={23} />
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
              <CalendarArrowUp size={23} />
              <CalendarArrowDown size={23} />
              <ClockArrowUp size={23} />
              <ClockArrowDown size={23} />
            </div>
            <div className='vsd'>
              <span>Start Date </span>
              <span>End Date </span>
              <span>Start Time </span>
              <span>End Time </span>
            </div>
            <div className='vsdf'>
              <span>{formatDate(booking.startDate)}</span>
              <span>{formatDate(booking.endDate)}</span>
              <span>{formatTime(booking.startTime)}</span>
              <span>{formatTime(booking.endTime)}</span>
            </div>
            <div className='vsdfg'>
              <User size={25} />
              <Users size={25} />
              <Phone size={22} />
              <FileCheck size={22} />
            </div>
            <div className='vsd'>
              <span>Name </span>
              <span>Persons </span>
              <span>Mob No </span>
              <span>Proof </span>
            </div>
            <div className='vsdf'>
              <span>{booking.name}</span>
              <span>{booking.noOfPersons}</span>
              <span>{booking.mobile}</span>
              <span>{booking.proof}</span>
            </div>
            <div style={{ display: 'flex', width: '30rem', flexDirection: 'column', gap: '3px' }}>
              <div style={{ display: 'flex', width: '30rem', alignItems: 'center', gap: '20px', margin: '15px 0 15px 0' }}>
                <span style={{ color: '#132b75', fontSize: '1.8rem' }}><IndianRupee size={22} />{booking.totalAmount - booking.advanceAmount}</span>
                <span style={{ color: '#132b75', fontSize: '1.4rem' }}>Payment Method: {booking.paymentMethod}</span>
              </div>
              <div style={{ display: 'flex', width: '30rem', alignItems: 'center', gap: '20px', margin: '15px 0 15px 0' }}>
                <button className='but' style={{ backgroundColor: '#132b75' }} onClick={() =>{ if (booking.status === "Pending") {handleStartClick(booking._id)}}}>Start</button>
                <div style={{ display: 'flex', backgroundColor: '#f4f4f4', width: '8.5rem', height: '3rem', borderRadius: '6px', justifyContent: 'center', alignItems: 'center' }}>{booking.status === "Journey Start" || booking.status === "Pending" ? booking.status : booking.totalTime}
                </div>                <button className='but' style={{ backgroundColor: 'red' }} onClick={() => {
    if (booking.status !== "Incompleted") {
      handleStopClick(
        booking._id,
        formatDate(booking.startDate),
        formatDate(new Date()), // Current date
        formatTime(booking.startTime),
        formatTime(new Date()), // Current time
        booking.numberOfDate,
        booking.totalAmount,
        booking.tax
      );
    } 
  }}>Stop</button>

                <button className='but' style={{ backgroundColor: '#22ff22' }} onClick={() => handleCompleteClick(booking._id)}>Completed</button>
              </div>
            </div>
            {/* Menu icon with dropdown */}
            <div style={{ position: 'relative', marginLeft: 'auto', padding: '10px' }}>
              <MoreVertical size={24} onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer' }} />
              {dropdownVisible === index && (
                <div style={{ position: 'absolute', top: '35px', right: '0', backgroundColor: 'white', boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)', borderRadius: '6px', zIndex: 100, width: "8rem" }}>
                  <div style={{ padding: '10px', cursor: 'pointer' }} onClick={() => openModal(booking._id)}>Add Advance</div>
                  <div style={{ padding: '10px', cursor: 'pointer' }} onClick={() => handleCancelClick(booking._id)}>Cancel Trip</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* Modal for Add Advance */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center heading, input, and button
          },
        }}
      >
        <div style={{ position: 'relative', width: '100%' }}>
          <h2 style={{ textAlign: 'center', margin: '0 auto',color:"#132b75" }}>Add Advance</h2>
          <X
            size={18}
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              cursor: 'pointer',
              color:"grey"
            }}
          />
        </div>
        <input
          type="number"
          value={advanceAmount}
          onChange={(e) => setAdvanceAmount(e.target.value)}
          placeholder="Enter advance amount"
          style={{
            width: '15rem',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
            marginTop: '20px', // Add margin to create space between heading and input
          }}
        />
        <button
          onClick={handleAdvanceSubmit}
          style={{
            padding: '10px 20px',
            backgroundColor: '#132b75',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '5rem', // Center the button
          }}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default VehicleStatus;
