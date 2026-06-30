import React, { useRef, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slide from './Slide'
import AppButton from '../../components/AppButton'
import AppText from '../../components/Typography'
import { ArrowRight, X } from 'lucide-react-native';
import Colors from '../../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import onboardingData from '../../data/onboardingData';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '../../redux/slices/appSlice';

const OnboardingScreen = () => {
  const sliderRef = useRef(null);

  const dispatch = useDispatch();

  const insets = useSafeAreaInsets();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDone = () => {
    dispatch(completeOnboarding());
  };

  const renderNextButton = () => (
    <View style={styles.next}>
      <AppText
        variant="body"
        color="#FFFFFF"
        style={styles.buttonText}>
        Next
      </AppText>

      <ArrowRight
        size={18}
        style={{ marginTop: 5 }}
        color="#FFFFFF"
        strokeWidth={2.5}
      />
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.button}>
      <AppButton
        title="Start My Journey"
        style={{
          width: '100%',
        }}
        onPress={handleDone}
      />
    </View>
  );

  const renderSkipButton = () => (
    <Pressable style={styles.skipButton}
      onPress={handleDone}>
      <AppText
        variant="body"
        color="#777777"
        style={styles.skipText}>
        Skip
      </AppText>
    </Pressable>
  );

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['bottom']}>
      {currentIndex !== onboardingData.length - 1 && (
        <View
          style={[
            styles.topBar,
            {
              top: insets.top + 12,
            },
          ]}>
          <Pressable
            onPress={handleDone}
            style={styles.skipContainer}>
            <AppText
              variant="body"
              color={Colors.subtitle}
              style={styles.skipText}>
              Skip
            </AppText>

            <X
              size={18}
              color={Colors.error}
              style={{ marginTop: 5 }}
              strokeWidth={2.5}
            />
          </Pressable>
        </View>
      )}
      <AppIntroSlider
        ref={sliderRef}
        data={onboardingData}
        onSlideChange={(index) => setCurrentIndex(index)}
        renderItem={({ item, index }) => (
          <Slide
            item={item}
            active={currentIndex === index}
          />
        )}

        showDoneButton={true}
        showNextButton={currentIndex !== onboardingData.length - 1}
        bottomButton={currentIndex === onboardingData.length - 1}
        showPagination={currentIndex !== onboardingData.length - 1}

        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}

        onDone={() => { }}
        onSkip={() => { }}
        activeDotStyle={{
          backgroundColor: '#FF6B8A',
          width: 24,
          borderRadius: 10,
        }}
        dotStyle={{
          backgroundColor: '#E5E5E5',
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  next: {
    backgroundColor: Colors.primary,

    height: 45,


    paddingHorizontal: 24,

    borderRadius: 28,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 6,

    marginBottom: 12,
  },
  button: {

    paddingHorizontal: 24,
    paddingVertical: 12,

  },

  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',

  },

  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  skipText: {
    fontFamily: 'PlusJakartaSans-Medium',
  },
  skipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  skipText: {
    fontFamily: 'PlusJakartaSans-Medium',
  },
  topBar: {
    position: 'absolute',

    right: 10,
    zIndex: 100,
  },
});