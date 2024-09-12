import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


// Async thunk to fetch vehicle data
export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async () => {
  const response = await axios.get('http://localhost:2000/cars/getall/car');
  return response.data;
});

// Async thunk to delete a vehicle
export const deleteVehicle = createAsyncThunk('vehicles/deleteVehicle', async (id, { rejectWithValue, dispatch }) => {
  try {
    await axios.delete(`http://localhost:2000/cars/delete/${id}`);
    dispatch(fetchVehicles());
    toast.success("Vehicle data deleted");
    return id; // Return the ID of the deleted vehicle
  } catch (error) {
    return rejectWithValue(error.response.data); // Return the error message from the server
  }
});

export const filterVehicles = createAsyncThunk('vehicles/filterVehicles', async (filterData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:2000/booking/filter', filterData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
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
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.vehicles = state.vehicles.filter(vehicle => vehicle.registrationNumber !== action.payload);
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.error = action.payload || 'Failed to delete vehicle'; // Set error message from server or default
      })

      .addCase(filterVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles = action.payload;
      })
      .addCase(filterVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch filtered vehicles';
      });
  }
  
});

export default vehicleDataSlice.reducer;
