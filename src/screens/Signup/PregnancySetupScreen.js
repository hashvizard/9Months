import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { CalendarDays, HeartPulse, FileText, Baby } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from "../../components/Screen"
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppSelectCard from '../../components/Form/AppSelectCard';
import AppButton from '../../components/AppButton';
import { roleContent } from '../../data/roleContent';
import Colors from '../../theme/colors';

import { updateSignup, setSignupStatus } from '../../redux/slices/signupSlice';

import { SIGNUP_STATUS } from '../../constants/signupStatus';
import { PREGNANCY_SETUP_METHOD } from '../../constants/pregnancySetupMethods';

export default function PregnancySetupScreen() {
  const dispatch = useDispatch();
  const { role } = useSelector(state => state.signup);

  const [selectedMethod, setSelectedMethod] = useState(null);

  const content = roleContent[role];

  const handleContinue = () => {
    dispatch(
      updateSignup({
        setupMethod: selectedMethod,
      }),
    );

    switch (selectedMethod) {
      case PREGNANCY_SETUP_METHOD.DUE_DATE:
        dispatch(setSignupStatus(SIGNUP_STATUS.DUE_DATE));
        break;

      case PREGNANCY_SETUP_METHOD.LMP:
        dispatch(setSignupStatus(SIGNUP_STATUS.LMP));
        break;

      case PREGNANCY_SETUP_METHOD.ULTRASOUND:
        dispatch(setSignupStatus(SIGNUP_STATUS.ULTRASOUND));
        break;

      case PREGNANCY_SETUP_METHOD.CURRENT_WEEK:
        dispatch(setSignupStatus(SIGNUP_STATUS.CURRENT_WEEK));
        break;
    }
  };

  return (
    <Screen>
      <AppProgress step={2} total={5} />

      <AppHeader
        title={content.title}
        subtitle={content.subtitle}
      />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>

        <AppSelectCard
          title={content.options.dueDate.title}
          subtitle={content.options.dueDate.subtitle}
          icon={
            <CalendarDays
              color={Colors.primary}
              size={30}
            />
          }
          selected={
            selectedMethod ===
            PREGNANCY_SETUP_METHOD.DUE_DATE
          }
          onPress={() =>
            setSelectedMethod(
              PREGNANCY_SETUP_METHOD.DUE_DATE,
            )
          }
        />

        <AppSelectCard
          title={content.options.lmp.title}
          subtitle={content.options.lmp.subtitle}
          icon={
            <HeartPulse
              color={Colors.primary}
              size={30}
            />
          }
          selected={
            selectedMethod ===
            PREGNANCY_SETUP_METHOD.LMP
          }
          onPress={() =>
            setSelectedMethod(
              PREGNANCY_SETUP_METHOD.LMP,
            )
          }
        />

        <AppSelectCard
          title={content.options.ultrasound.title}
          subtitle={content.options.ultrasound.subtitle}
          icon={
            <FileText
              color={Colors.primary}
              size={30}
            />
          }
          selected={
            selectedMethod ===
            PREGNANCY_SETUP_METHOD.ULTRASOUND
          }
          onPress={() =>
            setSelectedMethod(
              PREGNANCY_SETUP_METHOD.ULTRASOUND,
            )
          }
        />

        <AppSelectCard
          title={content.options.currentWeek.title}
          subtitle={content.options.currentWeek.subtitle}
          icon={
            <Baby
              color={Colors.primary}
              size={30}
            />
          }
          selected={
            selectedMethod ===
            PREGNANCY_SETUP_METHOD.CURRENT_WEEK
          }
          onPress={() =>
            setSelectedMethod(
              PREGNANCY_SETUP_METHOD.CURRENT_WEEK,
            )
          }
        />

      </ScrollView>

      <AppButton
        title="Continue"
        disabled={!selectedMethod}
        onPress={handleContinue}
      />
    </Screen>
  );
}