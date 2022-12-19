import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_BASE_API, USER_API } from '../constants/endpoints';

const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  accessToken,
  error: null,
  success: false,
};

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (userData) => {
    const res = await fetch(`${SERVER_BASE_API}${USER_API.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const responseData = await res.json();
    localStorage.setItem('accessToken', responseData.accessToken);
    return responseData;
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData) => {
    const res = await fetch(`${SERVER_BASE_API}${USER_API.SIGNUP}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const responseData = await res.json();
    return responseData;
  }
);

const authDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.accessToken = payload.accessToken;
      state.success = true;
    },
    [signInUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.data = {};
      state.error = error;
    },
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUpUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [signUpUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export default authDataSlice.reducer;
