import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

// Define the async thunk for fetching booking data
export const fetchBookings = createAsyncThunk('vehicleStatus/fetchBookings', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:2000/booking/getall/booking');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'An error occurred');
  }
});

// Create the slice
const vehicleStatusSlice = createSlice({
  name: 'vehicleStatus',
  initialState,
  reducers: {
    // You can define additional non-async reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.bookings = payload;
      })
      .addCase(fetchBookings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Export the async thunk and the reducer
export default vehicleStatusSlice.reducer;
