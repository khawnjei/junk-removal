const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentWrapper: {
    marginHorizontal: widthPixel(20),
  },
  headerWrapper: {
    marginTop: heightPixel(20),
  },
  titleWrapper: {
    alignSelf: 'center',
    marginTop: heightPixel(18),
  },
  titleText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  inputFieldsWrapper: {
    marginTop: heightPixel(20),
    gap: 15,
  },
  inputField: {
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  forgotPasswordWrapper: {
    marginTop: heightPixel(16),
  },
  forgotPasswordText: {
    fontFamily: fontFamily.appTextRegular,
    color: '#333333',
    fontSize: responsiveFontSize(1.8),
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  loginButtonWrapper: {
    marginTop: heightPixel(100),
    alignSelf: 'center',
  },
  orSeparatorWrapper: {
    marginTop: heightPixel(30),
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  separatorLine: {
    width: widthPixel(178),
    height: heightPixel(1),
    backgroundColor: '#E0E0E0',
  },
  orText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  fingerprintWrapper: {
    marginTop: heightPixel(20),
    alignSelf: 'center',
  },
  fingerprintIcon: {
    width: widthPixel(82),
    height: widthPixel(82),
  },
  signupWrapper: {
    marginTop: heightPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  signupText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  signupLink: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.theme,
    textDecorationLine: 'underline',
  },
});
