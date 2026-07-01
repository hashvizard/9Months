import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Screen from '../../components/Screen';
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppDatePicker from '../../components/Form/AppDatePicker';
import AppButton from '../../components/AppButton';
import AppSelectCard from '../../components/Form/AppSelectCard';

import {
  updateSignup,
  setSignupStatus,
} from '../../redux/slices/signupSlice';

import { SIGNUP_STATUS } from '../../constants/signupStatus';

export default function LMPScreen() {

  const dispatch = useDispatch();

  const [lmpDate, setLmpDate] = useState(null);

  const [cycleRegular, setCycleRegular] = useState(true);

  const handleContinue = () => {

    dispatch(updateSignup({

      lmpDate,

      cycleRegular,

    }));

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
        title="First day of your last period"
        subtitle="This helps estimate your pregnancy timeline."
      />

      <AppDatePicker
        label="Last Menstrual Period"
        value={lmpDate}
        onChange={setLmpDate}
      />

      <View style={{ marginTop: 30 }}>

        <AppSelectCard
          title="Regular Cycle"
          subtitle="Usually every 21–35 days"
          selected={cycleRegular}
          onPress={() => setCycleRegular(true)}
        />

        <AppSelectCard
          title="Irregular Cycle"
          subtitle="Cycle length varies"
          selected={!cycleRegular}
          onPress={() => setCycleRegular(false)}
        />

      </View>

      <View style={{ flex: 1 }} />

      <AppButton
        title="Continue"
        disabled={!lmpDate}
        onPress={handleContinue}
      />

    </Screen>

  );
}