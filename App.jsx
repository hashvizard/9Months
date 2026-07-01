import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {

  useEffect(() => {
    const prepare = async () => {
      await RNBootSplash.hide({
        fade: true,
      });
    };
    prepare();
  }, []);


  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <StatusBar
                translucent={false}
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
              />

              <RootNavigator />
            </SafeAreaProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}