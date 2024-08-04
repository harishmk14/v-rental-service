// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Slice/homeSlice';
import loginReducer from './Slice/loginSlice';
import registrationReducer from './Slice/registrationSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleDataReducer from './Slice/vehicleDataSlice'; // Import the new reducer

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
    registration: registrationReducer,
    vehicles: vehicleReducer,
    vehicleData: vehicleDataReducer, // Add it here
  },
});

export default store;
