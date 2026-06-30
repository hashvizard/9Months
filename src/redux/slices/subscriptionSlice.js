import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plan: 'FREE', // FREE | PREMIUM

  isSubscribed: false,

  purchaseToken: null,

  expiryDate: null,

  autoRenew: false,

  platform: null, // ios | android
};

const subscriptionSlice = createSlice({
  name: 'subscription',

  initialState,

  reducers: {
    updateSubscription(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    cancelSubscription(state) {
      state.isSubscribed = false;
      state.plan = 'FREE';
      state.expiryDate = null;
      state.purchaseToken = null;
      state.autoRenew = false;
      state.platform = null;
    },

    restorePurchase(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    resetSubscription() {
      return initialState;
    },
  },
});

export const {
  updateSubscription,
  cancelSubscription,
  restorePurchase,
  resetSubscription,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;