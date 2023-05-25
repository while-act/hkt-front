import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_EMAIL } from '@/api/services';

export const authEmail = createAsyncThunk('auth_email', async (body) => {
  const { data } = await axios.post(AUTH_EMAIL, {
    body,
  });
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const authEmailSlice = createSlice({
  name: 'authEmail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authEmail.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authEmail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(authEmail.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default authEmailSlice.reducer;
