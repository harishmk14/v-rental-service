import React from 'react';
import './styles.css';
import img1 from '../src/img/img1.jpg';

function SignIn() {
  return (
    <div className="login-container">
      <img src={img1} alt="Logo" className="login-logo" />
      <div className="login-box">
        <h2>REGISTER TO V-RENTAL</h2>
        <form>
          <div className="input-group horizontal-group">
            <div className="input-item">
              <label className='newone'>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-item">
              <label className='newone'>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-group horizontal-group">
            <div className="input-item">
              <label className='newone'>Age</label>
              <input type="text" placeholder="Age" />
            </div>
            <div className="input-item">
              <label className='newone'>Gender</label>
              <input type="text" placeholder="Gender" />
            </div>
          </div>
          <div className="input-group">
            <label>Mobile</label>
            <input type="text" placeholder="Mobile" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="input-group horizontal-group">
            <div className="input-item">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-item">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <button type="submit" className="login-button">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
