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
import Admin from './Admin';
import Profile from './Profile';
import ManageVehicle from './Managevehicle';
import VehicleStatus from './Vehiclestatus';
import Userprofile from './Userprofile';
import Customers from './Customer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="booking" element={<Booking />} />
          <Route path="journey" element={<Journey />} />
          <Route path="payment" element={<Payment />} />
          <Route path="userprofile" element={<Userprofile />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Profile />} />
          <Route path="managevehicle" element={<ManageVehicle />} />
          <Route path="vehiclestatus" element={<VehicleStatus />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
