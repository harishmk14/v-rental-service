// src/features/home/homeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    message: 'Welcome to the Booking System',
  },
  reducers: {},
});

export const selectMessage = (state) => state.home.message;
export default homeSlice.reducer;
