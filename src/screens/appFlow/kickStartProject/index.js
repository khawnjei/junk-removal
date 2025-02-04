import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {appImages} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';
import {heightPixel, routes, widthPixel} from '../../../services/constants';

const KickStartProject = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={appImages.backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <StatusBar
          backgroundColor={colors.black}
          translucent={true}
          barStyle="light-content"
        />
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>
            Click below to get your project started
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.projectSteps)}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Project</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  infoText: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    width: widthPixel(395),
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: heightPixel(90),
    marginBottom: heightPixel(60),
  },
  startButton: {
    width: widthPixel(270),
    backgroundColor: colors.theme,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPixel(52),
  },
  startButtonText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
  },
});

export default KickStartProject;
