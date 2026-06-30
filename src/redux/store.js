import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import persistConfig from './persistConfig';

import appReducer from './slices/appSlice';
import authReducer from './slices/authSlice';
import pregnancyReducer from './slices/pregnancySlice';
import subscriptionReducer from './slices/subscriptionSlice';
import notificationReducer from './slices/notificationSlice';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  pregnancy: pregnancyReducer,
  subscription: subscriptionReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);