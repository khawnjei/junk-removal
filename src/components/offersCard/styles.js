import {heightPixel, widthPixel} from '../../services/constants';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {responsiveFontSize} = require('react-native-responsive-dimensions');

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(20),
    borderWidth: 1,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardTouchable: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    borderWidth: 1,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  companyIcon: {
    width: widthPixel(55),
    height: heightPixel(55),
    resizeMode: 'contain',
  },
  companyName: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
    color: '#333333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  starIcon: {
    width: widthPixel(16),
    height: widthPixel(16),
    resizeMode: 'contain',
  },
  rating: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: '#666666',
    marginTop: heightPixel(4),
  },
  priceContainer: {
    marginTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  priceIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
  priceText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  priceValue: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  buttonsContainer: {
    marginTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rejectButton: {
    width: widthPixel(170),
    height: heightPixel(52),
    borderRadius: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectButtonText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: colors.theme,
  },
  acceptButton: {
    width: widthPixel(170),
    height: heightPixel(52),
    borderRadius: 30,
    backgroundColor: colors.theme,
    borderWidth: 1,
    borderColor: colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButtonText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: colors.white,
  },
});
