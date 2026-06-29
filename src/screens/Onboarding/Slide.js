import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import AppText from '../../components/Typography';

export default function Slide({ item, active }) {
  const imageScale = useSharedValue(0.8);
  const imageOpacity = useSharedValue(0);

  const titleY = useSharedValue(30);
  const titleOpacity = useSharedValue(0);

  const bodyY = useSharedValue(40);
  const bodyOpacity = useSharedValue(0);

  useEffect(() => {
    if (active) {
      imageScale.value = 0.8;
      imageOpacity.value = 0;

      titleY.value = 30;
      titleOpacity.value = 0;

      bodyY.value = 40;
      bodyOpacity.value = 0;

      imageScale.value = withTiming(1, { duration: 500 });
      imageOpacity.value = withTiming(1, { duration: 500 });

      titleY.value = withTiming(0, { duration: 500 });
      titleOpacity.value = withTiming(1, { duration: 500 });

      bodyY.value = withTiming(0, { duration: 700 });
      bodyOpacity.value = withTiming(1, { duration: 700 });
    }
  }, [active]);

  const imageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{ scale: imageScale.value }],
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleY.value }],
  }));

  const bodyStyle = useAnimatedStyle(() => ({
    opacity: bodyOpacity.value,
    transform: [{ translateY: bodyY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.image}
        resizeMode="contain"
        style={[styles.image, imageStyle]}
      />

      {item.title && (
        <Animated.View style={titleStyle}>
          <AppText
            variant="heading"
            style={styles.title}>
            {item.title}
          </AppText>
        </Animated.View>
      )}

      <Animated.View style={bodyStyle}>
        <AppText
          variant="body"
          color="#777777"
          style={styles.description}>
          {item.text}
        </AppText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  image: {
    width: 350,
    height: 350,
    marginBottom: 40,
  },

  title: {
    textAlign: 'center',
    marginBottom: 20,
  },

  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
});