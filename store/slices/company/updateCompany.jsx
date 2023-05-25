import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { COMPANY_UPDATE } from '@/api/services';

export const updateCompany = createAsyncThunk('updateCompany', async (body) => {
  const { data } = await axios.patch(COMPANY_UPDATE, body);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const updateCompanySlice = createSlice({
  name: 'updateCompany',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCompany.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(updateCompany.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(updateCompany.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default updateCompanySlice.reducer;
