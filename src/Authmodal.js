import React from 'react';

const AuthModal = ({ onClose }) => {
  return (
    <div className='modal-backdrop'>
      <div className='abc1'>
        <button
          onClick={onClose}
          className='abc2'
        >
          &times;
        </button>
        <h2 className='abc3'>Please Sign In or Sign Up</h2>
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
