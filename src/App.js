// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Vehicles from './Vehicles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Booking from './Booking';
import Payment from './Payment';
import Journey from './Journey';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="booking" element={<Booking />} />
            <Route path="payment" element={<Payment />} />
            <Route path="journey" element={<Journey />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
