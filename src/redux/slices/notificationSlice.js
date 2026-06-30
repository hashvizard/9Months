import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pushEnabled: true,

  reminderEnabled: true,

  weeklyTipsEnabled: true,

  vaccineReminderEnabled: true,

  medicineReminderEnabled: true,

  appointmentReminderEnabled: true,

  waterReminderEnabled: false,

  kickCounterReminderEnabled: false,

  notificationToken: null,
};

const notificationSlice = createSlice({
  name: 'notification',

  initialState,

  reducers: {
    updateNotificationSettings(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    setNotificationToken(state, action) {
      state.notificationToken = action.payload;
    },

    resetNotifications() {
      return initialState;
    },
  },
});

export const {
  updateNotificationSettings,
  setNotificationToken,
  resetNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;