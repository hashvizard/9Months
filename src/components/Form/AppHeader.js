import React from 'react';

import { View } from 'react-native';

import AppText from '../Typography';

export default function AppHeader({

    title,

    subtitle,

}) {

    return (

        <View
            style={{
                marginBottom:40,
            }}>

            <AppText variant="hero">

                {title}

            </AppText>

            <AppText
                variant="body"
                style={{
                    marginTop:12,
                }}>

                {subtitle}

            </AppText>

        </View>

    );

}