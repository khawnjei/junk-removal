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
  contentContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  instructionContainer: {
    marginTop: heightPixel(10),
  },
  instructionText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#414141',
  },
  companyIcon: {
    width: widthPixel(100),
    height: widthPixel(100),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  companyName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
    textAlign: 'center',
  },
  starRatingContainer: {
    alignSelf: 'center',
    marginTop: heightPixel(20),
  },
  starStyle: {
    gap: 15,
  },
  textInputContainer: {
    maxWidth: widthPixel(390),
    height: heightPixel(145),
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: heightPixel(15),
    color: '#666666',
    padding: 8,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  textInput: {
    color: '#666666',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(2),
  },
  footerContainer: {
    paddingVertical: heightPixel(10),
    alignSelf: 'center',
  },
});
