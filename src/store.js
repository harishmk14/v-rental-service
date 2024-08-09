// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Slice/homeSlice';
import loginReducer from './Slice/loginSlice';
import registrationReducer from './Slice/registrationSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleDataReducer from './Slice/vehicleDataSlice'; // Import the new reducer
import bookingReducer  from './Slice/bookingSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
    registration: registrationReducer,
    vehicles: vehicleReducer,
    vehicleData: vehicleDataReducer, // Add it here
    booking: bookingReducer,
  },
});

export default store;
