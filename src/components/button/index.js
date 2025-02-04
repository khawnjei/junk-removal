import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {heightPixel, widthPixel} from '../../services/constants';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const AppButton = ({title, onPress, disable}) => {
  return (
    <TouchableOpacity
      activeOpacity={5}
      style={[styles.btn, disable && styles.disabled]}
      disabled={disable}
      onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.theme,
    width: widthPixel(400),
    height: heightPixel(52),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.2),
  },
  disabled: {
    opacity: 0.5,
  },
});
export default AppButton;
