import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking } from './Slice/bookingSlice'; 
import { toast } from 'react-toastify';// Adjust the import path as necessary
import './styles.css';

const Bookmodal = ({ show, onClose, vehicle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const [form, setForm] = useState({
    departurePlace: '',
    arrivelPlace: '',
    startDate: '',
    endDate:'',
    startTime: '',
    endTime: '',
    travalType: '',
    noOfPersons: '',
    name: '',
    gender: '',
    mobile: '',
    alternateNo: '',
    email: '',
    address: '',
    proof:'',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(form))
      .unwrap()
      .then(() => {
        toast.success('Booking Details Submitted!');
        if (form.paymentMethod === 'cashon') {
          navigate('/journey', { state: { status: 'Pending' } });
        } else if (form.paymentMethod === 'onlinepay') {
          navigate('/payment');
        }
        resetForm(); 
        onClose();
      })
      .catch((err) => {
        console.error('Failed to add booking:', err);
        toast.error('Failed to submit booking details. Please try again.');
      });
  };

  const resetForm = () => {
    setForm({
      departurePlace: '',
      arrivelPlace: '',
      startDate: '',
      endDate:'',
      startTime: '',
      endTime: '',
      travalType: '',
      noOfPersons: '',
      name: '',
      gender: '',
      mobile: '',
      alternateNo: '',
      email: '',
      address: '',
      proof:'',
      paymentMethod: ''
    });
  };




  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{`Book ${vehicle.brandName}`}</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", marginTop:"20px", rowGap:"15px"}}>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="text" name="departurePlace" value={form.departurePlace} onChange={handleChange} required placeholder='Departure Place' />
            </div>
            <div className='new'>
              <input style={{width:"100%"}} type="text" name="arrivelPlace" value={form.arrivelPlace} onChange={handleChange} required placeholder='Arrive Place' />
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange}  style={{width:"100%"}} className="static-field"/>
            </div>
            <div className='new'> 
            <input type="date" name="endDate" value={form.endDate} onChange={handleChange}  style={{width:"100%"}} className="static-field"/>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="time" name="startTime" value={form.startTime} onChange={handleChange} required placeholder='Departure Time' />
            </div>
            <div className='new'>
              <input style={{width:"100%"}} type="time" name="endTime" value={form.endTime} onChange={handleChange} required placeholder='Arrive Time' />
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <select style={{width:"100%", borderRadius:"5px", border:"1px solid #b6b5b5", color:"#767676"}} name="travalType" value={form.travalType} onChange={handleChange} >
                <option value="">Travel Type</option>
                <option value="Hill Station">Hill Station</option>
                <option value="Out Station">Outstation</option>
                <option value="Off-roading">Off-Roading</option>
                <option value="City Travel">City Travel</option>
                <option value="Highway Travel">Highway Travel</option>
              </select>
            </div>
            <div className='new'>
              <input style={{width:"100%"}} type="number" name="noOfPersons" value={form.noOfPersons} onChange={handleChange} required placeholder='No.of Persons'/>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="text" name="name" value={form.name} onChange={handleChange} required placeholder='Name (Main)' />
            </div>
            <div className='new'>
            <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676" }} name="gender" value={form.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="tel" name="mobile" value={form.mobile} onChange={handleChange} required placeholder='Mobile No'/>
            </div>
            <div className='new'>
              <input style={{width:"100%"}} type="tel" name="alternateNo" value={form.alternateNo} onChange={handleChange} placeholder='Alternate No'/>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="email" name="email" value={form.email} onChange={handleChange} required placeholder='Email'/>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <input style={{width:"100%"}} type="text" name="address" value={form.address} onChange={handleChange} required placeholder='Address'/>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
              <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676"}} name="proof" value={form.proof} onChange={handleChange} required>
                <option value="">Select Proof</option>
                <option value="aadhar">Aadhar</option>
                <option value="passport">Passport</option>
                <option value="drivinglicense">Driving License</option>
                <option value="voterid">Voter ID</option>
              </select>
            </div>
          </div>
          <div className="mform-row">
            <div className='new'>
            <select style={{width:"100%", borderRadius:"5px", padding:"7px", border:"1px solid #b6b5b5", color:"#767676"}} name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
                <option value="">Select Payment Method</option>
                <option value="cashon">Cash On</option>
                <option value="onlinepay">Online Pay</option>
              </select>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"20px"}}>
          <div >
            <button type="submit" style={{backgroundColor:"#132b75",color:"white",padding:"8px",width:"5rem",borderRadius:"5px", border:"none"}}>Submit</button>
          </div>
          <div >
            <button type="button" style={{backgroundColor:"#6c757d",color:"white",padding:"8px",width:"5rem",borderRadius:"5px", border:"none"}}  onClick={onClose}>Cancel</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookmodal;
