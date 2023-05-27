import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SIGNUP } from '@/api/services';

export const signUp = createAsyncThunk('signUp', async (body) => {
  const { data } = await axios.post(
    SIGNUP,
    JSON.stringify({
      biography: "I'd like to relax",
      city: 'Москва',
      company: {
        inn: '7707083893',
        name: "ООО 'Парк'",
        website: 'https://www.rusprofile.ru',
      },
      country: 'Россия',
      email: 'myemail@gmail.com',
      fatherName: 'Ivanovich1',
      firstName: 'Ivan1',
      lastName: 'Ivanov',
      password: 'bob126',
      position: 'Director',
    })
  );
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(signUp.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export default signUpSlice.reducer;
