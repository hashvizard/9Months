import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../../components/Screen';
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppDatePicker from '../../components/Form/AppDatePicker';
import AppButton from '../../components/AppButton';

import {
  updateSignup,
  setSignupStatus,
} from '../../redux/slices/signupSlice';

import { SIGNUP_STATUS } from '../../constants/signupStatus';

export default function UltrasoundDueDateScreen() {
  const dispatch = useDispatch();

  const signup = useSelector(state => state.signup);

  const [dueDate, setDueDate] = useState(
    signup.pregnancy.ultrasound.dueDate,
  );

  const handleContinue = () => {
    dispatch(
      updateSignup({
        pregnancy: {
          ...signup.pregnancy,

          // Final value used throughout the app
          dueDate,

          ultrasound: {
            ...signup.pregnancy.ultrasound,
            dueDate,
          },
        },
      }),
    );

    dispatch(
      setSignupStatus(
        SIGNUP_STATUS.PARENT_INFO,
      ),
    );
  };

  return (
    <Screen>

      <AppProgress
        step={2}
        total={5}
      />

      <AppHeader
        title="Estimated Due Date"
        subtitle="Select the due date mentioned in your scan report."
      />

      <AppDatePicker
        label="Due Date"
        value={dueDate}
        onChange={setDueDate}
      />

      <AppButton
        title="Continue"
        disabled={!dueDate}
        onPress={handleContinue}
      />

    </Screen>
  );
}