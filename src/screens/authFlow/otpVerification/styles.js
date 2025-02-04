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
  scrollContent: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  titleContainer: {
    marginTop: heightPixel(20),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(3),
  },
  otpContainer: {
    marginTop: heightPixel(130),
  },
  otpInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    height: heightPixel(48),
    width: widthPixel(82),
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.semiBold,
  },
  infoContainer: {
    marginTop: heightPixel(73),
    alignItems: 'center',
    gap: 25,
  },
  infoText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  sendAgainText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: '#FD9105',
    textDecorationLine: 'underline',
  },
  timerText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(3),
    color: '#FD9105',
  },
  buttonContainer: {
    paddingVertical: heightPixel(10),
    alignSelf: 'center',
  },
});
