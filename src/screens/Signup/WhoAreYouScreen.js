import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { useDispatch } from 'react-redux';

import {

    updateSignup,

    setSignupStatus,

} from '../../redux/slices/signupSlice';

import {

    SIGNUP_STATUS,

} from '../../constants/signupStatus';

import {

    ROLES,

} from '../../constants/roles';

import AppHeader from '../../components/Form/AppHeader';

import AppProgress from '../../components/Form/AppProgress';

import AppSelectCard from '../../components/Form/AppSelectCard';

import AppButton from '../../components/AppButton';

import {

    Baby,

    HeartHandshake,

    Users,

} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Screen from '../../components/Screen';
import Colors from '../../theme/colors';

export default function WhoAreYouScreen() {

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(null);

    const next = () => {

        dispatch(updateSignup({

            role: selected,

        }));

        dispatch(setSignupStatus(

            SIGNUP_STATUS.PREGNANCY_SETUP

        ));

    };

    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.background,
                }}>

                <AppProgress

                    step={1}

                    total={5}

                />

                <AppHeader

                    title="Who are you?"

                    subtitle="Let's personalize your pregnancy journey."

                />

                <AppSelectCard

                    title="Expecting Mother"

                    subtitle="Track your pregnancy"

                    selected={selected === ROLES.MOTHER}

                    icon={<Baby size={30} />}

                    onPress={() => setSelected(ROLES.MOTHER)}

                />

                <AppSelectCard

                    title="Partner"

                    subtitle="Support the pregnancy"

                    selected={selected === ROLES.PARTNER}

                    icon={<HeartHandshake size={30} />}

                    onPress={() => setSelected(ROLES.PARTNER)}

                />

                <AppSelectCard

                    title="Both Parents"

                    subtitle="Experience together"

                    selected={selected === ROLES.BOTH}

                    icon={<Users size={30} />}

                    onPress={() => setSelected(ROLES.BOTH)}

                />

                <View style={{ flex: 1 }} />

                <AppButton

                    title="Continue"

                    disabled={!selected}

                    onPress={next}

                />

            </View>
        </Screen>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});