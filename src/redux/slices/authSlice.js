import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,

  accessToken: null,
  refreshToken: null,

  user: null,

  isPremium: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.isPremium = action.payload.isPremium || false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.isPremium = false;
    },

    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    updatePremium(state, action) {
      state.isPremium = action.payload;
    },
  },
});

export const {
  login,
  logout,
  updateUser,
  updatePremium,
} = authSlice.actions;

export default authSlice.reducer;