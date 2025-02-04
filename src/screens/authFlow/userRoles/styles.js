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
  mainWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPixel(47),
  },
  mainIcon: {
    width: widthPixel(100),
    height: widthPixel(100),
    resizeMode: 'contain',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: heightPixel(50),
  },
  headerText: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(3),
  },
  subHeaderText: {
    fontFamily: fontFamily.appTextRegular,
    color: '#666666',
    textAlign: 'center',
    marginHorizontal: widthPixel(35),
    lineHeight: 24,
    fontSize: responsiveFontSize(2),
  },
  rolesContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: heightPixel(40),
  },
  roleCard: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.grey,
    width: widthPixel(185),
    height: heightPixel(200),
    // shadowColor: '#grey',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
    // alignItems: 'center',
  },
  selectIconWrapper: {
    alignSelf: 'flex-end',
    marginRight: widthPixel(10),
    marginTop: heightPixel(10),
  },
  selectIcon: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
  roleContentWrapper: {
    gap: 15,
    marginTop: heightPixel(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  roleIcon: {
    width: widthPixel(100),
    height: widthPixel(100),
    resizeMode: 'contain',
  },
  roleTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: heightPixel(10),
  },
  placeHolder: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
});
