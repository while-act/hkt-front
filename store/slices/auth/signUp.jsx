import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SIGNUP } from '@/api/services';

export const signUp = createAsyncThunk('signUp', async (body) => {
  const { data } = await axios.post(SIGNUP, {
    body,
  });
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(signUp.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default signUpSlice.reducer;
