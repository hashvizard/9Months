import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import AppText from '../Typography';
import Colors from '../../theme/colors';

export default function AppDropdown({
  label,
  value,
  items,
  onChange,
  placeholder = 'Select',
}) {
  return (
    <>
      {label && (
        <AppText
          variant="body"
          style={styles.label}>
          {label}
        </AppText>
      )}

      <Dropdown
        style={styles.dropdown}
        data={items}
        labelField="label"
        valueField="value"
        value={value}
        placeholder={placeholder}
        onChange={item => onChange(item.value)}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        itemTextStyle={styles.itemText}
        containerStyle={styles.menu}
      />
    </>
  );
}

const styles = StyleSheet.create({

  label: {
    marginBottom: 8,
  },

  dropdown: {
    height: 56,

    borderWidth: 1,

    borderColor: '#E7E7E7',

    borderRadius: 16,

    paddingHorizontal: 16,

    marginBottom: 20,

    backgroundColor: '#FFF',
  },

  placeholder: {
    color: Colors.subtitle,
  },

  selectedText: {
    color: Colors.text,
  },

  itemText: {
    color: Colors.text,
  },

  menu: {
    borderRadius: 16,
  },

});