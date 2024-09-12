import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  bookingData: null,
  status: 'idle',
  fromdateandenddate: {},
  error: null,
  sendStatus: 'idle', // status for sendBookingId API
  sendError: null, // error for sendBookingId API
};

// Async thunk to add a booking
export const addBooking = createAsyncThunk(
  'booking/addBooking',
  async (bookingDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:2000/booking/add/booking', bookingDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to send the booking ID to the email API
export const sendBookingId = createAsyncThunk(
  'booking/sendBookingId',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:2000/api/sendEmail', { bookingId });
      console.log(response);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the booking slice
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle addBooking async thunk
      .addCase(addBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookingData = action.payload;
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Handle sendBookingId async thunk
      .addCase(sendBookingId.pending, (state) => {
        state.sendStatus = 'loading';
      })
      .addCase(sendBookingId.fulfilled, (state) => {
        state.sendStatus = 'succeeded';
      })
      .addCase(sendBookingId.rejected, (state, action) => {
        state.sendStatus = 'failed';
        state.sendError = action.payload;
      });
  },
});

export default bookingSlice.reducer;
