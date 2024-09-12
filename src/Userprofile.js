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
    <div className='userprofile-page'>
      <div className='up1'>
        <div className='up2'>
          <div className='up3'>
            <img className='up4'  src={pro} alt="Avatar"/>
          </div>
          <div className='up5'>
            <button className='up6'>Upload Photo</button>
          </div>
        </div>
      </div>
      <div className='up7'>
        <div className='up8'>
          <div className='up9'>
            <div className='up10'>
              <h1 className='up11'>User Information</h1>
            </div>
            <div className='up12'>
              <button onClick={openModal} className='up13'>Update</button>
            </div>
          </div>
          {user ? (
            <div className='up14'>
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
