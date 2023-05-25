import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { DELETE_COOKIE } from '@/api/services';

export const deleteCookie = createAsyncThunk('deleteCookie', async () => {
  const { data } = await axios.delete(DELETE_COOKIE);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const deleteCookieSlice = createSlice({
  name: 'deleteCookie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCookie.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(deleteCookie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(deleteCookie.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default deleteCookieSlice.reducer;
