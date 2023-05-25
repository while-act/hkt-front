import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_CALC_INDUSTRY } from '@/api/services';

export const saveCalcIndustry = createAsyncThunk('saveCalcIndustry', async () => {
  const { data } = await axios.get(GET_CALC_INDUSTRY);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const saveCalcIndustrySlice = createSlice({
  name: 'saveCalcIndustry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveCalcIndustry.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(saveCalcIndustry.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(saveCalcIndustry.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default saveCalcIndustrySlice.reducer;
