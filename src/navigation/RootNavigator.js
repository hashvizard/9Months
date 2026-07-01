import React from 'react';
import { useSelector } from 'react-redux';

import { SIGNUP_STATUS } from '../constants/signupStatus';

import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';

import WhoAreYouScreen from '../screens/Signup/WhoAreYouScreen';
import PregnancySetupScreen from '../screens/Signup/PregnancySetupScreen';
import DueDateScreen from '../screens/Signup/DueDateScreen';
import LMPScreen from '../screens/Signup/LMPScreen';
import UltrasoundScreen from '../screens/Signup/UltrasoundScreen';
import CurrentWeekScreen from '../screens/Signup/CurrentWeekScreen';
import ParentInfoScreen from '../screens/Signup/ParentInfoScreen';
import CreateAccountScreen from '../screens/Signup/CreateAccountScreen';
import SubscriptionScreen from '../screens/Signup/SubscriptionScreen';
import UltrasoundDueDateScreen from '../screens/Signup/UltrasoundDueDateScreen';
import UltrasoundWeekScreen from '../screens/Signup/UltrasoundWeekScreen'
import AppNavigator from './AppNavigator';

export default function RootNavigator() {
  const { isOnboardingCompleted } = useSelector(
    state => state.app,
  );

  const { status } = useSelector(
    state => state.signup,
  );

  console.log(status)
  if (!isOnboardingCompleted) {
    return <OnboardingScreen />;
  }

  switch (status) {
    case SIGNUP_STATUS.WHO_ARE_YOU:
      return <WhoAreYouScreen />;

    case SIGNUP_STATUS.PREGNANCY_SETUP:
      return <PregnancySetupScreen />;

    case SIGNUP_STATUS.DUE_DATE:
      return <DueDateScreen />;


    case SIGNUP_STATUS.LMP:
      return <LMPScreen />;

    case SIGNUP_STATUS.ULTRASOUND:
      return <UltrasoundScreen />;

    case SIGNUP_STATUS.ULTRASOUND_DUE_DATE:
      return <UltrasoundDueDateScreen />;

    case SIGNUP_STATUS.ULTRASOUND_WEEK:
      return <UltrasoundWeekScreen />;

    case SIGNUP_STATUS.CURRENT_WEEK:
      return <CurrentWeekScreen />;

    case SIGNUP_STATUS.PARENT_INFO:
      return <ParentInfoScreen />;

    case SIGNUP_STATUS.CREATE_ACCOUNT:
      return <CreateAccountScreen />;

    case SIGNUP_STATUS.SUBSCRIPTION:
      return <SubscriptionScreen />;

    default:
      return <AppNavigator />;
  }
}