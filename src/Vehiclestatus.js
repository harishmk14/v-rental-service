import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './Slice/vehicleStatusSlice'; // adjust the path as necessary
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

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const openModal = () => {
    setModalIsOpen(true);
    setDropdownVisible(null); // Close the dropdown when opening the modal
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAdvanceAmount(""); // Clear input on modal close
  };

  const handleAdvanceSubmit = () => {
    alert(`Advance Amount: ${advanceAmount}`);
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
      {bookings.map((booking, index) => (
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
              <span>{booking.startDate}</span>
              <span>{booking.endDate}</span>
              <span>{booking.startTime}</span>
              <span>{booking.endTime}</span>
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
                <span style={{ color: '#132b75', fontSize: '1.8rem' }}><IndianRupee size={22} />2800</span>
                <span style={{ color: '#132b75', fontSize: '1.4rem' }}>Payment Method: {booking.paymentMethod}</span>
              </div>
              <div style={{ display: 'flex', width: '30rem', alignItems: 'center', gap: '20px', margin: '15px 0 15px 0' }}>
                <button className='but' style={{ backgroundColor: '#132b75' }}>Start</button>
                <div style={{ display: 'flex', backgroundColor: '#f4f4f4', width: '8.5rem', height: '3rem', borderRadius: '6px', justifyContent: 'center', alignItems: 'center' }}>2D:8H:20M</div>
                <button className='but' style={{ backgroundColor: 'red' }}>Stop</button>
                <button className='but' style={{ backgroundColor: '#22ff22' }}>Completed</button>
              </div>
            </div>
            {/* Menu icon with dropdown */}
            <div style={{ position: 'relative', marginLeft: 'auto', padding: '10px' }}>
              <MoreVertical size={24} onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer' }} />
              {dropdownVisible === index && (
                <div style={{ position: 'absolute', top: '35px', right: '0', backgroundColor: 'white', boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)', borderRadius: '6px', zIndex: 100, width:"8rem" }}>
                  <div style={{ padding: '10px', cursor: 'pointer' }} onClick={openModal}>Add Advance</div>
                  <div style={{ padding: '10px', cursor: 'pointer' }} onClick={() => alert('Cancel Trip clicked')}>Cancel Trip</div>
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
