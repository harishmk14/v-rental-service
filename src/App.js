// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Vehicles from './Vehicles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Booking from './Booking';
import Journey from './Journey';
import Payment from './Payment';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="booking" element={<Booking />} />
          <Route path="journey" element={<Journey />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
