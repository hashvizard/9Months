import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dueDate: null,

  pregnancyWeek: 1,

  pregnancyDay: 1,

  trimester: 1,

  babyName: '',

  motherName: '',

  fatherName: '',

  reports: [],

  reminders: [],
};

const pregnancySlice = createSlice({
  name: 'pregnancy',

  initialState,

  reducers: {
    setDueDate(state, action) {
      state.dueDate = action.payload;
    },

    setPregnancyWeek(state, action) {
      state.pregnancyWeek = action.payload;
    },

    setPregnancyDay(state, action) {
      state.pregnancyDay = action.payload;
    },

    setTrimester(state, action) {
      state.trimester = action.payload;
    },

    setBabyName(state, action) {
      state.babyName = action.payload;
    },

    setParents(state, action) {
      state.motherName = action.payload.motherName;
      state.fatherName = action.payload.fatherName;
    },

    addReport(state, action) {
      state.reports.push(action.payload);
    },

    addReminder(state, action) {
      state.reminders.push(action.payload);
    },

    clearPregnancy(state) {
      return initialState;
    },
  },
});

export const {
  setDueDate,
  setPregnancyWeek,
  setPregnancyDay,
  setTrimester,
  setBabyName,
  setParents,
  addReport,
  addReminder,
  clearPregnancy,
} = pregnancySlice.actions;

export default pregnancySlice.reducer;