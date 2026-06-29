import React from 'react';
import { Text } from 'react-native';

import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';
import Typography from '../../theme/typography';

export default function AppText({
  children,
  variant = 'body',
  color = Colors.text,
  style,
  numberOfLines,
}) {
  const variants = {
    hero: {
      fontSize: Typography.hero,
      fontFamily: Fonts.bold,
    },

    title: {
      fontSize: Typography.title,
      fontFamily: Fonts.bold,
    },

    heading: {
      fontSize: Typography.heading,
      fontFamily: Fonts.semiBold,
    },

    body: {
      fontSize: Typography.body,
      fontFamily: Fonts.regular,
    },

    caption: {
      fontSize: Typography.caption,
      fontFamily: Fonts.regular,
    },

    small: {
      fontSize: Typography.small,
      fontFamily: Fonts.regular,
    },
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        variants[variant],
        {
          color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}