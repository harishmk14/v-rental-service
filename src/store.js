// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Slice/homeSlice';
import loginReducer from './Slice/loginSlice';
import registrationReducer from './Slice/registrationSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
    registration: registrationReducer,
  },
});

export default store;
