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
    flex: 1,
  },
  topSection: {
    marginTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(20),
  },
  userSection: {
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    width: widthPixel(48),
    height: widthPixel(48),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  welcomeText: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.8),
    color: '#8E8E8E',
  },
  userName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
  },
  notificationIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  tabsContainer: {
    marginTop: heightPixel(20),
    alignSelf: 'center',
    marginBottom: heightPixel(10),
  },
  tabsWrapper: {
    width: widthPixel(330),
    height: heightPixel(50),
    backgroundColor: '#F6F0ED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: heightPixel(50),
  },
  selectedTabButton: {
    backgroundColor: '#FD9105',
  },
  tabText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  selectedTabText: {
    color: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: heightPixel(10),
    paddingHorizontal: widthPixel(20),
    paddingTop: heightPixel(10),
  },
});
