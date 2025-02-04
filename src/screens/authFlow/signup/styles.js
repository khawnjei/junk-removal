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
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    marginHorizontal: widthPixel(20),
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  titleContainer: {
    marginTop: heightPixel(25),
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  subtitleText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  inputFieldsContainer: {
    marginTop: heightPixel(20),
    gap: 10,
  },
  loginPromptWrapper: {
    marginTop: heightPixel(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginPromptText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  loginPromptLink: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.theme,
    textDecorationLine: 'underline',
  },
  inputField: {
    gap: 8,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  orSeparatorWrapper: {
    marginTop: heightPixel(15),
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
  socialContainer: {
    marginTop: heightPixel(15),
    alignItems: 'center',
    gap: 10,
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
  buttonContainer: {
    marginTop: heightPixel(20),
    alignSelf: 'center',
  },
});
