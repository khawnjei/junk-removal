import React from 'react';

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {appIcons} from '../../services/utilities/assets';
import {heightPixel, widthPixel} from '../../services/constants';
import {fontFamily} from '../../services/utilities/fonts';
import {colors} from '../../services/utilities/colors';

const AppHeader = ({onPress, title, authorization = false}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={appIcons.leftArrowIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={authorization ? styles.titleB : styles.titleA}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    width: widthPixel(26),
    height: widthPixel(26),
    resizeMode: 'contain',
  },
  titleA: {
    fontFamily: fontFamily.appTextSemiBold,
    color: '#333333',
    fontSize: responsiveFontSize(2.1),
    marginTop: heightPixel(3),
  },
  titleB: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
    fontSize: responsiveFontSize(2.1),
    marginTop: heightPixel(3),
  },
});

export default AppHeader;
