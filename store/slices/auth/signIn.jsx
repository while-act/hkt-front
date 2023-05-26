import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SIGNIN } from '@/api/services';

export const signIn = createAsyncThunk('signIn', async (body) => {
  const { data } = await axios.post(SIGNIN, body);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default signInSlice.reducer;
