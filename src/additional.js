import React from 'react';
import './styles.css'; 
import car1 from './img/1234.jpg'

const Profile = () => {
  return (
    <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"96rem",height:"88.9vh"}}>
      <div style={{display:"flex",margin:"20px",width:"93.5rem",height:"83.5vh", backgroundColor:"white", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)' }}>
        <div style={{display:"flex", flexDirection:"column", width:"30rem", height:"36.3rem"}}>
          <div style={{display:"flex",margin: "40px 20px 20px 40px",width:"27.5rem",height:"22rem",justifyContent:"center",alignItems:"center"}}>
          <img style={{width:"20rem",height:"20rem",borderRadius:"50%",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}  src={car1} alt="Avatar"/>
          </div>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"20px"}}>
            <button style={{backgroundColor:"#132b75", color:"white",padding:"10px", border:"none",borderRadius:"5px"}}>Change Photo</button>
          </div>
        </div>
        <div style={{display:"flex",marginLeft:"20px",marginRight:"20px",marginTop:"1.15rem", width:"1px", height:"34rem", backgroundColor:"#ccd1e2"}}></div>
        <div style={{display:"flex", width:"61rem", height:"36.3rem"}}></div>
      </div>
    </div>
  );
};

export default Profile;


<form style={{width:"60rem"}}>
<div className="input-group horizontal-group">
  <div className="input-item">
    <label>First Name</label>
    <input
      type="text"
      placeholder="First Name"
      name="firstName"
      // value={formData.firstName}
      // onChange={handleChange}
    />
    {/* {errors.firstName && <span className="error">{errors.firstName}</span>} */}
  </div>
  <div className="input-item">
    <label>Last Name</label>
    <input
      type="text"
      placeholder="Last Name"
      name="lastName"
      // value={formData.lastName}
      // onChange={handleChange}
    />
    {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
  </div>
</div>
<div className="input-group horizontal-group1">
  <div className="input-item1">
    <label>Age</label>
    <input
      type="text"
      placeholder="Age"
      name="age"
      // value={formData.age}
      // onChange={handleChange}
    />
    {/* {errors.age && <span className="error">{errors.age}</span>} */}
  </div>
  <div className="input-item2">
    <label>Gender</label>
    <select
      name="gender"
      // value={formData.gender}
      // onChange={handleChange}
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Others">Others</option>
    </select>
    {/* {errors.gender && <span className="error">{errors.gender}</span>} */}
  </div>
  <div className="input-item3">
    <label>Mobile</label>
    <input
      type="text"
      placeholder="Mobile"
      name="mobile"
      // value={formData.mobile}
      // onChange={handleChange}
    />
    {/* {errors.mobile && <span className="error">{errors.mobile}</span>} */}
  </div>
</div>
<div className="input-group">
  <label>Email</label>
  <input
    type="text"
    placeholder="Email"
    name="email"
  //   value={formData.email}
  //   onChange={handleChange}
  />
  {/* {errors.email && <span className="error">{errors.email}</span>} */}
</div>
<div className="input-group">
  <label>Address</label>
  <input
    type="text"
    placeholder="Address"
    name="address"
  //   value={formData.address}
  //   onChange={handleChange}
  />
  {/* {errors.address && <span className="error">{errors.address}</span>} */}
</div>
<div className="input-group horizontal-group">
  <div className="input-item">
    <label>Password</label>
    <input
      type="password"
      placeholder="Password"
      name="password"
      // value={formData.password}
      // onChange={handleChange}
    />
    {/* {errors.password && <span className="error">{errors.password}</span>} */}
  </div>
  <div className="input-item">
    <label>Confirm Password</label>
    <input
      type="password"
      placeholder="Confirm Password"
      name="confirmPassword"
      // value={formData.confirmPassword}
      // onChange={handleChange}
    />
    {/* {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>} */}
  </div>
</div>
{/* <div style={{display:"flex", justifyContent:"center"}}>
  <button type="submit" className="register-button" style={{width:"8rem",margin:"0"}}>Sign Up</button>
  </div> */}
</form>