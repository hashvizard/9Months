import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          translucent={false}
          backgroundColor="#FFFFFF"
          barStyle="dark-content"
        />


        <OnboardingScreen />

      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}