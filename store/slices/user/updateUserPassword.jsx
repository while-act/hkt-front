import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_PASSWORD } from '@/api/services';

export const updateUserPassword = createAsyncThunk('updateUserPassword', async (newPassword) => {
  const { data } = await axios.patch(USER_PASSWORD, {
    newPassword,
  });
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const updateUserPasswordSlice = createSlice({
  name: 'updateUserPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserPassword.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(updateUserPassword.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(updateUserPassword.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default updateUserPasswordSlice.reducer;
