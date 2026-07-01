import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { Check } from 'lucide-react-native';

import AppText from '../Typography';
import Colors from '../../theme/colors';

export default function BottomSheetItem({
  item,
  selected,
  onPress,
}) {
  return (
    <Pressable
      style={[
        styles.container,
        selected && styles.selected,
      ]}
      onPress={() => onPress(item)}
    >
      <AppText
        variant="body"
        style={[
          styles.title,
          selected && styles.selectedTitle,
        ]}>
        {item.label}
      </AppText>

      {selected && (
        <Check
          size={20}
          color={Colors.primary}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 10,

    backgroundColor: '#FFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selected: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: '#FFF5F7',
  },

  title: {
    flex: 1,
  },

  selectedTitle: {
    color: Colors.primary,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});