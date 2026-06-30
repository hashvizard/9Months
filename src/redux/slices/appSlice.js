import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOnboardingCompleted: false,
};

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    completeOnboarding(state) {
      state.isOnboardingCompleted = true;
    },

    resetOnboarding(state) {
      state.isOnboardingCompleted = false;
    },
  },
});

export const {
  completeOnboarding,
  resetOnboarding,
} = appSlice.actions;

export default appSlice.reducer;