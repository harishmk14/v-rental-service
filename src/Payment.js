// src/Payment.js
import React from 'react';
import './styles.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <h1 style={{color:"#132b75"}}>Payment Page</h1>
      <p style={{color:"#132b75"}}>Are you willing to pay?</p>
      <button style={{borderRadius:"10px",width:"6rem", backgroundColor:"#132b75", color:"white", border:"0px solid #132b75"}} className="payment-button">Pay</button>
      <button style={{borderRadius:"10px",width:"6rem", backgroundColor:"#b9b9b9", color:"white", border:"0px solid #132b75"}}className="payment-button">Cancel</button>
    </div>
  );
};

export default Payment;
