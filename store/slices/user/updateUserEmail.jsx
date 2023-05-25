import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_EMAIL } from '@/api/services';

export const updateUserEmail = createAsyncThunk('updateUserEmail', async (mail) => {
  const { data } = await axios.patch(USER_EMAIL, {
    mail,
  });
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const updateUserEmailSlice = createSlice({
  name: 'updateUserEmail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserEmail.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(updateUserEmail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(updateUserEmail.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default updateUserEmailSlice.reducer;
