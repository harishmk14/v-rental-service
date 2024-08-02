// src/Slice/vehicleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  vehicles: [],
  status: 'idle',
  error: null,
};

// Asynchronous thunk action for adding a vehicle
export const addVehicle = createAsyncThunk(
  'vehicles/addVehicle',
  async (vehicleData) => {
    const response = await axios.post('http://localhost:2000/cars/add/cars', vehicleData);
    return response.data;
  }
);

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addVehicle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addVehicle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles.push(action.payload);
      })
      .addCase(addVehicle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default vehicleSlice.reducer;
