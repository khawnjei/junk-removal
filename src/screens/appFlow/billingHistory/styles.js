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
  innerContainer: {
    flex: 1,
  },
  header: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  tableHeaderContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 80,
  },
  tableHeaderText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
    width: widthPixel(80),
  },
  rowContainer: {
    marginTop: heightPixel(15),
  },
  row: {
    backgroundColor: colors.white,
    width: '100%',
    paddingVertical: heightPixel(15),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    gap: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyIcon: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
  },
  companyName: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#2E2E2E',
    marginTop: heightPixel(2),
    width: wp(30),
  },
  dateText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#0394B9',
  },
  priceText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#0394B9',
    paddingRight: widthPixel(5),
  },
});
