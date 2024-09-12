import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for admin login
export const adminLogin = createAsyncThunk(
  'admin/login',
  async ({ adminId, adminPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:2000/admin/login', { adminId, password: adminPassword });
      localStorage.setItem('loggedInAdminId', response.data.admin._id);
      return response.data;


    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

// Async thunk for fetching admin data
export const fetchAdminData = createAsyncThunk(
  'admin/fetchAdminData',
  async (adminId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:2000/admin/getsingle/${adminId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.admin = payload.admin; // Ensure you're extracting the correct data
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.admin = payload; // Assuming payload contains the admin data
      })
      .addCase(fetchAdminData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default adminSlice.reducer;
