import React, { useState } from 'react';
import { View } from 'react-native';
import { CalendarDays, FileText } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../../components/Screen';
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppSelectCard from '../../components/Form/AppSelectCard';
import AppButton from '../../components/AppButton';
import AppText from '../../components/Typography';

import Colors from '../../theme/colors';

import {
  updateSignup,
  setSignupStatus,
} from '../../redux/slices/signupSlice';

import { SIGNUP_STATUS } from '../../constants/signupStatus';
import { ULTRASOUND_TYPES } from '../../constants/ultrasoundTypes';

export default function UltrasoundScreen() {
  const dispatch = useDispatch();

  const signup = useSelector(state => state.signup);

  const [type, setType] = useState(
    signup.pregnancy.ultrasound.type,
  );

  const handleContinue = () => {
    dispatch(
      updateSignup({
        pregnancy: {
          ...signup.pregnancy,

          ultrasound: {
            ...signup.pregnancy.ultrasound,

            type,
          },
        },
      }),
    );

    dispatch(
      setSignupStatus(
        type === ULTRASOUND_TYPES.EDD
          ? SIGNUP_STATUS.ULTRASOUND_DUE_DATE
          : SIGNUP_STATUS.ULTRASOUND_WEEK,
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
        title="Use Your Scan Report"
        subtitle="What information is available on your pregnancy scan?"
      />

      <AppSelectCard
        title="Estimated Due Date"
        subtitle="Example: 15 February 2027"
        icon={
          <CalendarDays
            size={30}
            color={Colors.primary}
          />
        }
        selected={type === ULTRASOUND_TYPES.EDD}
        onPress={() => setType(ULTRASOUND_TYPES.EDD)}
      />

      <AppSelectCard
        title="Pregnancy Week"
        subtitle="Example: 12 Weeks 4 Days"
        icon={
          <FileText
            size={30}
            color={Colors.primary}
          />
        }
        selected={
          type ===
          ULTRASOUND_TYPES.GESTATIONAL_AGE
        }
        onPress={() =>
          setType(
            ULTRASOUND_TYPES.GESTATIONAL_AGE,
          )
        }
      />

      <View style={{ flex: 1 }} />

      <AppText
        variant="caption"
        color={Colors.subtitle}
        style={{
          textAlign: 'center',
          marginBottom: 16,
        }}>
        Not sure? Don't worry, you can update this later.
      </AppText>

      <AppButton
        title={
          type
            ? 'Continue'
            : 'Select an Option'
        }
        disabled={!type}
        onPress={handleContinue}
      />

    </Screen>
  );
}