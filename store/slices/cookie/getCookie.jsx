import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_COOKIE } from '@/api/services';

export const getCookie = createAsyncThunk('getCookie', async () => {
  const { data } = await axios.get(GET_COOKIE);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
  err: null,
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
      console.log(action.payload, 'cookie');
      state.status = 'success';
    });

    builder.addCase(getCookie.rejected, (state, action) => {
      state.status = 'error';
      state.data = null;
      state.err = action.payload;
      console.log(action.payload, 'mem');
    });
  },
});

export default getCookieSlice.reducer;
