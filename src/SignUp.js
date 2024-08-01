// src/SignUp.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './Slice/registrationSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import img1 from '../src/img/img1.png';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.registration);
  const navigate = useNavigate();

  useEffect(() => {
    if (registrationState.success) {
      toast.success("Registration successful!", {
        onClose: () => navigate('/signin')
      });
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        mobile: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
      });
    }
    if (registrationState.error) {
      toast.error(`Error: ${registrationState.error}`);
    }
  }, [registrationState.success, registrationState.error, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const payload = {
        fName: formData.firstName,
        lName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        address: formData.address,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      dispatch(registerUser(payload));
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <div className="register-img-container">
        <img src={img1} alt="Logo" className="register-logo" />
      </div>
      <div className="register-box">
        <h1>REGISTER TO V-RENTAL</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group horizontal-group">
            <div className="input-item">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="input-item">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
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
              {errors.age && <span className="error">{errors.age}</span>}
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
              {errors.gender && <span className="error">{errors.gender}</span>}
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
              {errors.mobile && <span className="error">{errors.mobile}</span>}
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
            {errors.email && <span className="error">{errors.email}</span>}
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
            {errors.address && <span className="error">{errors.address}</span>}
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
              {errors.password && <span className="error">{errors.password}</span>}
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
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          </div>
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/signin">Login here</Link></p>
        </div>
        {registrationState.loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default SignUp;
