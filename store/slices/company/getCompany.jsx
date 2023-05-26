import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { COMPANY } from '@/api/services';

export const getCompany = createAsyncThunk('getCompany', async () => {
  const { data } = await axios.get(COMPANY);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const getCompanySlice = createSlice({
  name: 'getCompany',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompany.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getCompany.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(getCompany.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default getCompanySlice.reducer;
