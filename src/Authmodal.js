import React from 'react';

const AuthModal = ({ onClose }) => {
  return (
    <div className='modal-backdrop'>
      <div className='abc1'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}> 
  <h2 className='abc2'>
    Please Sign In or Sign Up
  </h2>
  <button
    onClick={onClose}
    style={{ position: "absolute", top: 0, right: 0, background: "transparent", border: "none", fontSize: "24px", cursor: "pointer" }}
  >
    &times;
  </button>
</div>
        
        <p  className='abc4'>You need to be logged in to access this page.</p>
        <button
          onClick={() => window.location.href = '/signin'}
          className='abc5'
        >
          Sign In
        </button>
        <button
          onClick={() => window.location.href = '/signup'}
          className='abc6'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
