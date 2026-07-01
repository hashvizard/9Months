import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { CalendarDays } from 'lucide-react-native';

import AppText from '../Typography';
import Colors from '../../theme/colors';

export default function AppDatePicker({
  label,
  value,
  onChange,
  maximumDate,
  minimumDate,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {label && (
        <AppText
          variant="body"
          style={styles.label}>
          {label}
        </AppText>
      )}

      <Pressable
        style={styles.container}
        onPress={() => setOpen(true)}>

        <AppText
          color={value ? Colors.text : Colors.subtitle}>
          {value
            ? new Date(value).toLocaleDateString()
            : 'Select Date'}
        </AppText>

        <CalendarDays
          size={22}
          color={Colors.primary}
        />

      </Pressable>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={value ? new Date(value) : new Date()}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={(date) => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({

  label: {
    marginBottom: 8,
  },

  container: {
    height: 56,

    borderWidth: 1,

    borderColor: '#E7E7E7',

    borderRadius: 16,

    paddingHorizontal: 16,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

    backgroundColor: '#FFF',
  },

});