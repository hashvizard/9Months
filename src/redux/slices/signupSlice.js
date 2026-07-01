import { createSlice } from '@reduxjs/toolkit';
import { SIGNUP_STATUS } from '../../constants/signupStatus';

const initialState = {
  // Navigation
  status: SIGNUP_STATUS.WHO_ARE_YOU,

  // Who is using the app?
  role: null,

  // How pregnancy was configured
  setupMethod: null,

  // Pregnancy Information
  pregnancy: {
    // Final calculated values (used throughout the app)
    dueDate: null,
    currentWeek: null,
    currentDay: null,

    // LMP Information
    lmp: {
      date: null,
      cycleRegular: true,
    },

    // Ultrasound Information
    ultrasound: {
      type: null, // EDD | GESTATIONAL_AGE
      scanDate: null,
      dueDate: null,
      week: null,
      day: null,
    },
  },

  // Parents Information
  parents: {
    motherName: '',
    partnerName: '',
    babyNickname: '',
  },
};

const signupSlice = createSlice({
  name: 'signup',

  initialState,

  reducers: {
    updateSignup(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    setSignupStatus(state, action) {
      state.status = action.payload;
    },

    resetSignup() {
      return initialState;
    },
  },
});

export const {
  updateSignup,
  setSignupStatus,
  resetSignup,
} = signupSlice.actions;

export default signupSlice.reducer;