import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './Slice/userSlice';
import './styles.css'; 
import pro from './img/12345.jpg';
import Usermodal from './Usermodal'; // Import Usermodal component

const Userprofile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userId = localStorage.getItem('loggedInUserId');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"96rem",height:"88.9vh"}}>
      <div style={{display:"flex",width:"29.6rem",height:"88.9vh"}}>
        <div style={{display:"flex",flexDirection:"column", backgroundColor:"white",width:"28rem",height:"82vh",margin:"25px 0px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
          <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"3rem"}}>
            <img style={{width:"15rem",height:"15rem",borderRadius:"55%",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}  src={pro} alt="Avatar"/>
          </div>
          <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"2rem"}}>
            <button style={{width:"8rem",padding:"10px",border:"none", borderRadius:"6px",backgroundColor:"#132b75",color:"white", cursor:"pointer"}}>Upload Photo</button>
          </div>
        </div>
      </div>
      <div style={{display:"flex",width:"66rem",height:"88.9vh"}}>
        <div style={{display:"flex", flexDirection:"column" ,backgroundColor:"white",width:"63rem",height:"82vh",margin:"25px 25px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
          <div style={{display:"flex",width:"63rem"}}>
            <div style={{display:"flex",justifyContent:"center",width:"55rem"}}>
              <h1 style={{color:"#132b75"}}>User Information</h1>
            </div>
            <div style={{display:"flex",width:"8rem",justifyContent:"center",alignItems:"center"}}>
              <button onClick={openModal} style={{padding:"10px",border:"none", borderRadius:"6px",backgroundColor:"#132b75",color:"white", cursor:"pointer"}}>Update</button>
            </div>
          </div>
          {user ? (
            <div style={{display:"flex"}}>
              <div className='mine'> 
                <label className='upc'>First Name</label>
                <label className='upc'>Last Name</label>
                <label className='upc'>Age</label>
                <label className='upc'>Gender</label>
                <label className='upc'>Mobile</label>
                <label className='upc'>Email</label>
                <label className='upc'>Address</label>
                <label className='upc'>Password</label>
              </div> 
              <div className='mine'>
                <span className='upcc'>{user.fName}</span>
                <span className='upcc'>{user.lName}</span>
                <span className='upcc'>{user.age}</span>
                <span className='upcc'>{user.gender}</span>
                <span className='upcc'>{user.mobile}</span>
                <span className='upcc'>{user.email}</span>
                <span className='upcc'>{user.address}</span>
                <span className='upcc'>{user.password}</span>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>    
      </div>
      {/* Render Usermodal component */}
      {isModalOpen && <Usermodal show={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Userprofile;
