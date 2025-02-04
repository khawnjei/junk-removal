import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {heightPixel, widthPixel} from '../../services/constants';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const CautionPopup = ({
  icon,
  title,
  upperButton,
  lowerButton,
  onPressLowerButton,
  onPressUpperButton,
}) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        <View style={styles.contentContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            onPress={onPressUpperButton}
            style={styles.upperButton}>
            <Text style={styles.buttonText}>{upperButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressLowerButton}
            style={styles.lowerButton}>
            <Text style={styles.buttonTextLower}>{lowerButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContainer: {
    width: widthPixel(284),
    backgroundColor: colors.white,
    borderRadius: 40,
    paddingVertical: heightPixel(40),
    paddingHorizontal: widthPixel(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: widthPixel(186),
    height: heightPixel(180),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.5),
    color: colors.theme,
    textAlign: 'center',
  },
  upperButton: {
    width: widthPixel(185),
    height: heightPixel(48),
    backgroundColor: colors.theme,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerButton: {
    width: widthPixel(185),
    height: heightPixel(48),
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.theme,
  },
  buttonText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: colors.white,
  },
  buttonTextLower: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: colors.theme,
  },
});

export default CautionPopup;
