import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'app',
    'auth',
    'pregnancy',
    'subscription',
    'notification',
  ],
};

export default persistConfig;