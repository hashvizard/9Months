import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../../components/Screen';
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppBottomSheetSelect from '../../components/Form/AppBottomSheetSelect';
import AppButton from '../../components/AppButton';

import {
  updateSignup,
  setSignupStatus,
} from '../../redux/slices/signupSlice';

import { SIGNUP_STATUS } from '../../constants/signupStatus';

const weeks = Array.from({ length: 42 }, (_, i) => ({
  label: `Week ${i + 1}`,
  value: i + 1,
}));

const days = Array.from({ length: 7 }, (_, i) => ({
  label: `${i} Day${i === 1 ? '' : 's'}`,
  value: i,
}));

export default function CurrentWeekScreen() {
  const dispatch = useDispatch();

  const signup = useSelector(state => state.signup);

  const [week, setWeek] = useState(
    signup.pregnancy.currentWeek,
  );

  const [day, setDay] = useState(
    signup.pregnancy.currentDay,
  );

  const handleContinue = () => {
    dispatch(
      updateSignup({
        pregnancy: {
          ...signup.pregnancy,

          currentWeek: week,
          currentDay: day,
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
        title="Current Pregnancy Progress"
        subtitle="Select your current pregnancy week and day."
      />

      <AppBottomSheetSelect
        label="Pregnancy Week"
        placeholder="Select Week"
        value={week}
        data={weeks}
        onChange={setWeek}
        height={430}
      />

      <AppBottomSheetSelect
        label="Pregnancy Day"
        placeholder="Select Day"
        value={day}
        data={days}
        onChange={setDay}
        height={430}
      />

      <View style={{ flex: 1 }} />

      <AppButton
        title="Continue"
        disabled={
          week === null ||
          day === null
        }
        onPress={handleContinue}
      />

    </Screen>
  );
}