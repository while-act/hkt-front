import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER } from '@/api/services';

export const updateUser = createAsyncThunk('updateUser', async (newData) => {
  const { data } = await axios.patch(USER, {
    newData,
  });
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const userSlice = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(updateUser.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default userSlice.reducer;
