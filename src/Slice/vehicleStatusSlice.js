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

// Define the async thunk for updating booking data
export const updateBooking = createAsyncThunk('vehicleStatus/updateBooking', async ({ bookingId, updateData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`http://localhost:2000/booking/update/${bookingId}`, updateData);
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
      })
      .addCase(updateBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.bookings.findIndex((booking) => booking._id === payload._id);
        if (index !== -1) {
          state.bookings[index] = payload;
        }
      })
      .addCase(updateBooking.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Export the async thunks and the reducer
export const { actions: vehicleStatusActions } = vehicleStatusSlice;
export default vehicleStatusSlice.reducer;
