import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SAVE_CALC_HISTORY } from '@/api/services';

export const generatePDF = createAsyncThunk('saveCalcHistory', async (body) => {
  const { data } = await axios.post(SAVE_CALC_HISTORY, body);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const saveCalcHistorySlice = createSlice({
  name: 'generatePDF',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generatePDF.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(generatePDF.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(generatePDF.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default saveCalcHistorySlice.reducer;
