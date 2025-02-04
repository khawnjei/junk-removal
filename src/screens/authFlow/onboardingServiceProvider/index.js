import React from 'react';

import {ImageBackground, StatusBar, Text, View} from 'react-native';

import {appImages} from '../../../services/utilities/assets';
import {routes} from '../../../services/constants';
import {styles} from './styles';

import AppButton from '../../../components/button';
import {colors} from '../../../services/utilities/colors';

const OnboardingServiceProviders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={appImages.onboardingServiceImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <StatusBar
          backgroundColor={colors.black}
          translucent={true}
          barStyle={'light-content'}
        />
        <View style={styles.contentContainer}>
          <View style={styles.quoteContainer}>
            <Text style={styles.openingQuote}>{`\u201C`}</Text>
            <Text style={styles.quoteText}>
              Keep your crew working around the clock by filling up the gaps in
              your calendar. Get clients who are serious and ready to get their
              junk removed today
            </Text>
            <Text style={styles.closingQuote}>{`\u201D`}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={'Get Started'}
            onPress={() => navigation.navigate(routes.signinType)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingServiceProviders;
