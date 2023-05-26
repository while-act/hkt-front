import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_COOKIE } from '@/api/services';

export const getCookie = createAsyncThunk('getCookie', async () => {
  const { data } = await axios.get(GET_COOKIE);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const getCookieSlice = createSlice({
  name: 'getCookie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCookie.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getCookie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(getCookie.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default getCookieSlice.reducer;
