import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminModal({ isOpen, onClose, onLogin }) {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin({ adminId, adminPassword });
      // Reset the form fields
      setAdminId('');
      setAdminPassword('');
      // Navigate to the admin page
      navigate('/admin');
    } catch (error) {
      // Handle any login errors here if needed
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{height:"330px"}}>
        <h1 style={{ color: "#132b75" }}>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Admin Id</label>
            <input
              type="text"
              placeholder="Admin Id"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </div>
          <div className="modal-buttons" style={{ gap: "20px" }}>
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: '#132b75',
                color: 'white',
                border: 'none',
                borderRadius: "6px",
                width: "4rem",
                cursor: "pointer"
              }}
            >
              Login
            </button>
            <button
              type="button"
              style={{
                padding: "10px",
                backgroundColor: '#f4f4f4',
                border: 'none',
                borderRadius: "6px",
                width: "4rem",
                cursor: "pointer"
              }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminModal;
