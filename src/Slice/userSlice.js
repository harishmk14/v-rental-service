// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (userId) => {
  const response = await axios.get(`http://localhost:2000/api/user/${userId}`);
  return response.data;
});

// Async thunk to update user data
export const updateUserData = createAsyncThunk('user/updateUserData', async ({ userId, formData }) => {
  const response = await axios.put(`http://localhost:2000/api/update/${userId}`, formData);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
