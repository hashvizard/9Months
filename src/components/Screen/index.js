import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../theme/colors';

export default function Screen({
    children,
    style,
    edges = ['top', 'bottom'],
    padding = true,
}) {
    return (
        <SafeAreaView
            style={styles.container}
            edges={['top', 'bottom']}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFFFFF',
    },
});