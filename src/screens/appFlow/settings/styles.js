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
  innerContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  header: {
    marginTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: '#333333',
  },
  notificationIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  profileContainer: {
    marginTop: heightPixel(40),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: widthPixel(100),
    height: widthPixel(100),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  profileName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#0A0F0D',
    marginTop: heightPixel(5),
  },
  profileEmail: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#808080',
  },
  profilePhone: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#808080',
    marginTop: heightPixel(5),
  },
  settingsContainer: {
    marginTop: heightPixel(20),
    gap: 14,
  },
});
