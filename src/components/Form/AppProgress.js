import React from 'react';
import { View } from 'react-native';

import Colors from '../../theme/colors';

export default function AppProgress({

    step,

    total,

}) {

    return (

        <View

            style={{

                height: 8,

                backgroundColor: '#EFEFEF',

                borderRadius: 20,

                overflow: 'hidden',

                marginBottom: 30,

            }}>

            <View

                style={{

                    height: 8,

                    width: `${step / total * 100}%`,

                    backgroundColor: Colors.primary,

                }} />

        </View>

    );

}