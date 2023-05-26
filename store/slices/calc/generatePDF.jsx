import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { GENERATE_PDF } from '@/api/services';

export const generatePDF = createAsyncThunk('generatePDF', async () => {
  const { data } = await axios.get(GENERATE_PDF);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const generatePDFSlice = createSlice({
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

export default generatePDFSlice.reducer;
