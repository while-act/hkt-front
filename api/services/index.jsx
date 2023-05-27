import axios from 'axios';

export const API_URL = 'http://37.230.195.26:3000/api';
// export const API_URL = '/api/';
export const DELETE_COOKIE = 'auth/session';
export const GET_COOKIE = 'auth/session';
export const SIGNIN = 'auth/sign-in';
export const SIGNUP = 'auth/sign-up';
export const AUTH_EMAIL = 'email/send-code';
export const COMPANY = 'company';
export const COMPANY_UPDATE = 'company';
export const USER = 'user';
export const USER_EMAIL = 'user/email';
export const USER_PASSWORD = 'user/password';
export const GENERATE_PDF = '/calc';
export const SAVE_CALC_HISTORY = '/calc';
export const GET_CALC_INDUSTRY = '/calc/industry';
export const USER_PDF_HISTORY = (company_name = 'test') => {
  return `/user/${company_name}`;
};

axios.defaults.baseURL = API_URL;
