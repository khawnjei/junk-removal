const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel, wp} from '../../../services/constants';
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
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  profileImageContainer: {
    marginTop: heightPixel(20),
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(3),
  },
  imageWrapper: {
    alignSelf: 'center',
  },
  profileImage: {
    width: widthPixel(140),
    height: widthPixel(140),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  cameraIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: heightPixel(10),
    right: widthPixel(3),
    zIndex: 999,
  },
  inputFieldsContainer: {
    marginTop: heightPixel(40),
    alignItems: 'center',
    gap: 20,
  },
  inputField: {
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  buttonContainer: {
    paddingVertical: heightPixel(10),
    alignSelf: 'center',
  },
  locationSectionContainer: {
    marginTop: heightPixel(20),
    gap: 10,
    paddingBottom: heightPixel(20),
  },
  locationBox: {
    width: widthPixel(390),
    borderRadius: 10,
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(16),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  locationDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  locationIcon: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
  },
  locationDescription: {
    color: '#383838',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    width: wp(60),
  },
  locationEditIcon: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
  sectionTitleText: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
  },
});
