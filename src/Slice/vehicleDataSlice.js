// src/Slice/vehicleDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch vehicle data
export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async () => {
  const response = await axios.get('http://localhost:2000/cars/getall/car');
  return response.data;
});

// Slice for vehicle data
const vehicleDataSlice = createSlice({
  name: 'vehicleData',
  initialState: {
    vehicles: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Optionally add other reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default vehicleDataSlice.reducer;
