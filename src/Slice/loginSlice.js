// src/Slice/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the login async thunk
export const loginUser = createAsyncThunk('login/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:2000/api/user/login', userData);
    localStorage.setItem('loggedInUserId', response.data.user._id);
    return response.data;
  } catch (error) {
    // Log the error details for debugging
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
