import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

export default function DueDateScreen() {
  const dispatch = useDispatch();

  const [dueDate, setDueDate] = useState(null);

  const handleContinue = () => {
    dispatch(
      updateSignup({
        dueDate,
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
        title="When is your baby's due date?"
        subtitle="We'll calculate everything automatically."
      />

      <AppDatePicker
        label="Expected Due Date"
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