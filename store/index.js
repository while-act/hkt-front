import { configureStore } from '@reduxjs/toolkit';
import signInSlice from './slices/auth/signIn';
import authEmailSlice from './slices/auth/signUpEmail';
import signUpSlice from './slices/auth/signUp';
import deleteCookieSlice from './slices/cookie/deleteCookie';
import getCookieSlice from './slices/cookie/getCookie';
import userSlice from './slices/user/updateUserData';
import updateUserEmailSlice from './slices/user/updateUserEmail';
import updateUserPasswordSlice from './slices/user/updateUserPassword';
import userPdfHistorySlice from './slices/user/userPdfHistory';
import updateCompanySlice from './slices/company/updateCompany';
import getCompanySlice from './slices/company/getCompany';
import generatePDFSlice from './slices/calc/generatePDF';
import saveCalcHistorySlice from './slices/calc/saveCalcHistory';
import saveCalcIndustrySlice from './slices/calc/saveCalcIndustry';

export const store = configureStore({
  reducer: {
    signInSlice,
    authEmailSlice,
    signUpSlice,
    deleteCookieSlice,
    getCookieSlice,
    userSlice,
    updateUserEmailSlice,
    updateUserPasswordSlice,
    updateCompanySlice,
    getCompanySlice,
    generatePDFSlice,
    saveCalcHistorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
