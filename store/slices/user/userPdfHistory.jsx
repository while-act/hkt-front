import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_PDF_HISTORY } from '@/api/services';

export const userPdfHistory = createAsyncThunk('userPdfHistory', async (company) => {
  const { data } = await axios.get(USER_PDF_HISTORY(company));
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const userPdfHistorySlice = createSlice({
  name: 'userPdfHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userPdfHistory.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(userPdfHistory.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(userPdfHistory.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default userPdfHistorySlice.reducer;
