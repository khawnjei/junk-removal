import React from 'react';

import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {appIcons, appImages} from '../../../services/utilities/assets';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';
import {colors} from '../../../services/utilities/colors';

import AppButton from '../../../components/button';
import AppHeader from '../../../components/appHeader';

const LicenseRegB = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={appImages.licenseBackgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <StatusBar
          backgroundColor={colors.black}
          translucent={true}
          barStyle={'light-content'}
        />
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <AppHeader
              title={'Business Authorized User License'}
              onPress={() => navigation.goBack()}
              authorization={true}
            />
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              Place front side of your Business License on the Green box
            </Text>
            <Text style={styles.stepText}>2/2</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={appIcons.licenseIconB} style={styles.licenseImage} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={'Next'}
            onPress={() => navigation.navigate(routes.profileVerification)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LicenseRegB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    paddingHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    paddingTop: heightPixel(20),
  },
  instructionContainer: {
    paddingTop: heightPixel(80),
    gap: 10,
  },
  instructionText: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  stepText: {
    fontFamily: fontFamily.appTextRegular,
    color: colors.white,
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  imageContainer: {
    paddingTop: heightPixel(80),
  },
  licenseImage: {
    width: '100%',
    height: heightPixel(250),
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingBottom: heightPixel(10),
  },
});
