import {heightPixel, widthPixel, wp} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {responsiveFontSize} = require('react-native-responsive-dimensions');

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
    marginBottom: heightPixel(20),
  },
  header: {
    marginTop: heightPixel(20),
  },
  profileImageContainer: {
    marginTop: heightPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: widthPixel(130),
    height: widthPixel(130),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  editImageIcon: {
    width: widthPixel(26),
    height: widthPixel(26),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 999,
    bottom: heightPixel(5),
    left: widthPixel(35),
  },
  formContainer: {
    marginTop: heightPixel(40),
    gap: 20,
  },
  inputContainer: {
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  locationSectionContainer: {
    gap: 10,
  },
  locationBox: {
    width: widthPixel(390),
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  saveButtonContainer: {
    marginHorizontal: widthPixel(14),
    marginBottom: heightPixel(10),
  },
});
