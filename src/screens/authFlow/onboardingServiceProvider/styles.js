const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quoteContainer: {
    paddingHorizontal: widthPixel(5),
  },
  openingQuote: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.theme,
    fontSize: responsiveFontSize(7),
    marginBottom: heightPixel(-63),
  },
  quoteText: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  closingQuote: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.theme,
    fontSize: responsiveFontSize(7),
    alignSelf: 'flex-end',
    paddingRight: widthPixel(20),
    marginTop: heightPixel(-40),
  },
  buttonContainer: {
    marginHorizontal: widthPixel(20),
    marginBottom: heightPixel(10),
  },
});
