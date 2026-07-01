import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../../components/Screen';
import AppHeader from '../../components/Form/AppHeader';
import AppProgress from '../../components/Form/AppProgress';
import AppDatePicker from '../../components/Form/AppDatePicker';
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

export default function UltrasoundWeekScreen() {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const signup = useSelector(state => state.signup);

    const [scanDate, setScanDate] = useState(
        signup.pregnancy.ultrasound.scanDate,
    );

    const [week, setWeek] = useState(
        signup.pregnancy.ultrasound.week,
    );

    const [day, setDay] = useState(
        signup.pregnancy.ultrasound.day,
    );

    const handleContinue = () => {
        dispatch(
            updateSignup({
                pregnancy: {
                    ...signup.pregnancy,

                    ultrasound: {
                        ...signup.pregnancy.ultrasound,

                        scanDate,
                        week,
                        day,
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
                title="Gestational Age"
                subtitle="Enter the pregnancy week and day mentioned on your scan report."
            />

            <AppDatePicker
                label="Scan Date"
                value={scanDate}
                onChange={setScanDate}
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
                    !scanDate ||
                    week === null ||
                    day === null
                }
                onPress={handleContinue}
            />
        </Screen>
    );
}