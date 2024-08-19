// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Slice/homeSlice';
import loginReducer from './Slice/loginSlice';
import registrationReducer from './Slice/registrationSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleDataReducer from './Slice/vehicleDataSlice'; // Import the new reducer
import bookingReducer  from './Slice/bookingSlice';
import userReducer from './Slice/userSlice';
import customerReducer from './Slice/customerSlice';
import adminReducer from './Slice/adminSlice';
import vehicleStatusReducer from './Slice/vehicleStatusSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
    registration: registrationReducer,
    vehicles: vehicleReducer,
    vehicleData: vehicleDataReducer, // Add it here
    booking: bookingReducer,
    user: userReducer,
    customers: customerReducer,
    admin: adminReducer,
    vehicleStatus: vehicleStatusReducer,
  },
});

export default store;
