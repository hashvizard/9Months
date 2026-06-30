import React from 'react';
import { useSelector } from 'react-redux';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export default function RootNavigator() {
  const { isOnboardingCompleted } = useSelector(
    state => state.app,
  );

  const { isLoggedIn } = useSelector(
    state => state.auth,
  );



  if (!isOnboardingCompleted) {
    return <OnboardingScreen />;
  }

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
}