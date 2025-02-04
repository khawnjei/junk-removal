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
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
  },
  innerContainer: {
    flex: 1,
  },
  contentWrapper: {
    marginHorizontal: widthPixel(20),
  },
  headerContainer: {
    paddingTop: heightPixel(20),
  },
  backIcon: {
    width: widthPixel(26),
    height: widthPixel(26),
    resizeMode: 'contain',
  },
  textContainer: {
    paddingTop: heightPixel(10),
    gap: 20,
  },
  mainTitle: {
    fontFamily: fontFamily.appTextBold,
    color: colors.theme,
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
  },
  imageWrapper: {
    paddingTop: heightPixel(50),
    alignSelf: 'center',
  },
  illustrationImage: {
    width: widthPixel(250),
    height: heightPixel(268),
  },
  verificationTextWrapper: {
    paddingTop: heightPixel(50),
    gap: 10,
  },
  waitText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3),
    color: colors.theme,
    textAlign: 'center',
  },
  descriptionText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#666666',
    textAlign: 'center',
  },
  buttonWrapper: {
    alignSelf: 'center',
    paddingBottom: heightPixel(10),
  },
});
