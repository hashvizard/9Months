import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import Colors from '../../theme/colors';
import AppText from '../Typography';

export default function AppSelectCard({
  title,
  subtitle,
  icon,
  selected,
  onPress,
}) {
  return (
    <Pressable
      style={[
        styles.container,
        selected && styles.selected,
      ]}
      onPress={onPress}>

      {icon && (
        <View style={styles.icon}>
          {icon}
        </View>
      )}

      <View style={{ flex: 1 }}>

        <AppText variant="heading">
          {title}
        </AppText>

        {!!subtitle && (
          <AppText
            variant="body"
            color={Colors.subtitle}
            style={{ marginTop: 6 }}>
            {subtitle}
          </AppText>
        )}

      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({

  container: {

    borderWidth: 1,

    borderColor: '#E8E8E8',

    borderRadius: 18,

    padding: 18,

    marginBottom: 16,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

  },

  selected: {

    borderColor: Colors.primary,

    backgroundColor: '#FFF5F7',

  },

  icon: {

    marginRight: 18,

  },

});