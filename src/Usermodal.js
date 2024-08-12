import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchUserData, updateUserData } from './Slice/userSlice';
import { toast } from 'react-toastify';

const Usermodal = ({ show, onClose}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    age: '',
    gender: '',
    mobile: '',
    address: '',
    email: '',
    password: '',
    confirmPassword:'',
  });
  const userId = localStorage.getItem('loggedInUserId');
  useEffect(() => {
    if (show && userId) {
      dispatch(fetchUserData(userId))
        .unwrap()
        .then((data) => {
          // Populate formData with the fetched user data
          setFormData({
            fName: data.fName || '',
            lName: data.lName || '',
            age: data.age || '',
            gender: data.gender || '',
            mobile: data.mobile || '',
            address: data.address || '',
            email: data.email || '',
            password: data.password || '', // Keep passwords empty for security
            confirmPassword: data.confirmPassword || '',
          });
        })
        .catch((error) => {
          console.error('Failed to fetch user data:', error);
        });
    }
  }, [show, userId, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('loggedInUserId');
    dispatch(updateUserData({ userId, formData }))
      .unwrap()
      .then(() => {
        toast.success('updated successfully!');
        onClose(); // Close the modal on success
      })
      .catch((error) => {
        console.error('Failed to update user data:', error);
      });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">Update Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group horizontal-group">
            <div className="input-item">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lName"
                value={formData.lName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group horizontal-group1">
            <div className="input-item1">
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="input-item2">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-item3">
              <label>Mobile</label>
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="input-group horizontal-group">
            <div className="input-item">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', columnGap: "30px", marginTop: "25px" }}>
            <button type="submit" className="register-button" style={{ width: '5rem', margin: '0' }}>
              Update
            </button>
            <button type="button" style={{ backgroundColor: "#6c757d", color: "white", padding: "8px", width: "5rem", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermodal;
