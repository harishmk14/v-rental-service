import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  bookingData: null,
  status: 'idle',
  fromdateandenddate:{},
  error: null,
};

// Create an async thunk for posting booking data
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

// Create the booking slice
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default bookingSlice.reducer;
