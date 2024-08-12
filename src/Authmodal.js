import React from 'react';

const AuthModal = ({ onClose }) => {
  return (
    <div className='modal-backdrop'>
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '400px',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#132b75',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        <h2 style={{ color: '#132b75' }}>Please Sign In or Sign Up</h2>
        <p>You need to be logged in to access this page.</p>
        <button
          onClick={() => window.location.href = '/signin'}
          style={{
            margin: '1rem',
            padding: '10px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#132b75',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => window.location.href = '/signup'}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#132b75',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
