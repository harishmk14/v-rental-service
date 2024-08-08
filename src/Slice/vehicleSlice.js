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

export const updateVehicle = createAsyncThunk(
  'vehicles/updateVehicle',
  async ({ id, vehicleData }) => {
    const response = await axios.put(`http://localhost:2000/cars/update/${id}`, vehicleData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Ensure the content type is correct for FormData
      }
    });
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
      })
      .addCase(updateVehicle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.vehicles.findIndex(vehicle => vehicle.id === action.payload.id);
        if (index !== -1) {
          state.vehicles[index] = action.payload;
        }
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default vehicleSlice.reducer;
