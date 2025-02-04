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
  headerContainer: {
    marginHorizontal: widthPixel(20),
  },
  header: {
    marginTop: heightPixel(20),
  },
  titleContainer: {
    marginTop: heightPixel(35),
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(3),
  },
  socialContainer: {
    marginTop: heightPixel(25),
    alignItems: 'center',
    gap: 20,
  },
  socialButton: {
    width: widthPixel(400),
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
    paddingVertical: heightPixel(20),
  },
  socialIcon: {
    width: widthPixel(23),
    height: heightPixel(23),
    resizeMode: 'contain',
  },
  socialText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#0D1B2A',
  },
  dividerContainer: {
    marginTop: heightPixel(40),
    flexDirection: 'row',
    marginHorizontal: widthPixel(20),
    gap: 8,
    alignItems: 'center',
  },
  divider: {
    width: widthPixel(178),
    height: heightPixel(1),
    backgroundColor: '#E0E0E0',
  },
  orText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#333333',
  },
  emailButtonContainer: {
    marginTop: heightPixel(40),
    marginHorizontal: widthPixel(20),
  },
  footerContainer: {
    marginHorizontal: widthPixel(20),
    marginTop: heightPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  footerText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  signupText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.theme,
    textDecorationLine: 'underline',
  },
});
