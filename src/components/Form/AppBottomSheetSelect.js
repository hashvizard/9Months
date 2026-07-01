import React, { useState, useEffect } from 'react';
import {
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { ChevronDown } from 'lucide-react-native';

import BottomSheetItem from './BottomSheetItem';
import AppText from '../Typography';
import Colors from '../../theme/colors';

export default function AppBottomSheetSelect({
  label,
  value,
  data = [],
  placeholder = 'Select',
  onChange,
  height = 380,
}) {
  const [visible, setVisible] = useState(false);

  const translateY = useSharedValue(height);
  const backdropOpacity = useSharedValue(0);

  const selectedItem = data.find(
    item => item.value === value,
  );

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        translateY.value = withTiming(0, {
          duration: 350,
          easing: Easing.out(Easing.cubic),
        });

        backdropOpacity.value = withTiming(1, {
          duration: 250,
        });
      });
    }
  }, [visible]);

  const openSheet = () => {
    setVisible(true);
  };

  const closeSheet = () => {
    translateY.value = withTiming(height, {
      duration: 280,
      easing: Easing.in(Easing.cubic),
    });

    backdropOpacity.value = withTiming(0, {
      duration: 220,
    });

    setTimeout(() => {
      setVisible(false);
    }, 280);
  };

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

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
        style={styles.input}
        onPress={openSheet}>
        <AppText
          color={
            selectedItem
              ? Colors.text
              : Colors.subtitle
          }>
          {selectedItem
            ? selectedItem.label
            : placeholder}
        </AppText>

        <ChevronDown
          size={20}
          color={Colors.subtitle}
        />
      </Pressable>

      <Modal
        visible={visible}
        transparent
        statusBarTranslucent
        animationType="none">

        <TouchableWithoutFeedback
          onPress={closeSheet}>
          <Animated.View
            style={[
              styles.backdrop,
              backdropStyle,
            ]}>

            <TouchableWithoutFeedback>

              <Animated.View
                style={[
                  styles.sheet,
                  {
                    height,
                  },
                  sheetStyle,
                ]}>

                <View style={styles.handle} />

                <AppText
                  variant="heading"
                  style={styles.heading}>
                  {label}
                </AppText>

                <FlatList
                  data={data}
                  keyExtractor={item =>
                    item.value.toString()
                  }
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <BottomSheetItem
                      item={item}
                      selected={
                        item.value === value
                      }
                      onPress={selected => {
                        onChange(
                          selected.value,
                        );

                        closeSheet();
                      }}
                    />
                  )}
                />

              </Animated.View>

            </TouchableWithoutFeedback>

          </Animated.View>
        </TouchableWithoutFeedback>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  label: {
    marginBottom: 8,
  },

  input: {
    height: 56,

    borderWidth: 1,

    borderColor: '#ECECEC',

    borderRadius: 16,

    paddingHorizontal: 18,

    backgroundColor: '#FFF',

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,
  },

  backdrop: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.35)',

    justifyContent: 'flex-end',
  },

  sheet: {
    backgroundColor: '#FFF',

    borderTopLeftRadius: 28,

    borderTopRightRadius: 28,

    paddingHorizontal: 20,

    paddingTop: 14,
  },

  handle: {
    width: 52,
    height: 5,

    borderRadius: 5,

    backgroundColor: '#DADADA',

    alignSelf: 'center',

    marginBottom: 18,
  },

  heading: {
    textAlign: 'center',

    marginBottom: 20,
  },

});