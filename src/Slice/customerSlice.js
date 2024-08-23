// src/Slice/customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await fetch('http://localhost:2000/api/getall');
  const data = await response.json();
  return data;
});

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;
