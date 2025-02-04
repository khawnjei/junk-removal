import React from 'react';

import {ImageBackground, StatusBar, Text, View} from 'react-native';

import {appImages} from '../../../services/utilities/assets';
import {routes} from '../../../services/constants';
import {styles} from './styles';

import AppButton from '../../../components/button';
import {colors} from '../../../services/utilities/colors';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={appImages.onboardingImage}
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
              Save time and money by getting direct and fast pricing from local
              companies in your area
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

export default Onboarding;
