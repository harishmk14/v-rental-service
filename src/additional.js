import React, { useState } from 'react';

const Usermodal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    age: '',
    gender: '',
    mobile: '',
    address: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    // If valid, proceed with form submission
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">Update Information</h2>

        <form style={{ width: '60rem' }} onSubmit={handleSubmit}>
          {/* ...form fields... */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" className="register-button" style={{ width: '8rem', margin: '0' }}>
              Update
            </button>
            <button type="button" style={{backgroundColor:"#6c757d",color:"white",padding:"8px",width:"5rem",borderRadius:"5px", border:"none"}} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermodal;
