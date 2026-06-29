import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import AppText from '../Typography';
import Colors from '../../theme/colors';

export default function AppButton({
  title,
  onPress,
  type = 'filled',
  loading = false,
  disabled = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}) {
  const filled = type === 'filled';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        filled ? styles.filled : styles.outlined,
        disabled && styles.disabled,
        style,
      ]}>

      {leftIcon}

      {loading ? (
        <ActivityIndicator
          color={filled ? '#FFFFFF' : Colors.primary}
        />
      ) : (
        <AppText
          variant="body"
          color={filled ? '#FFFFFF' : Colors.primary}
          style={[styles.text, textStyle]}>
          {title}
        </AppText>
      )}

      {rightIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',

    paddingHorizontal: 24,
  },

  filled: {
    backgroundColor: Colors.primary,
  },

  outlined: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: '#FFFFFF',
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});