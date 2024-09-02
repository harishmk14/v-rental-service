import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from './Slice/adminSlice';

function AdminModal({ isOpen, onClose }) {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.admin);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(adminLogin({ adminId, adminPassword }));
      if (adminLogin.fulfilled.match(resultAction)) {
        // Reset the form fields
        setAdminId('');
        setAdminPassword('');
        // Navigate to the admin page
        navigate('/admin');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="modal-buttons" style={{ gap: "20px" }}>
            <button
              type="submit"
              className='abc8'
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type="button"
              className='abc9'
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
