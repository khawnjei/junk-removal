const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  paddingHorizontal20: {paddingHorizontal: widthPixel(20)},
  paddingTop20: {paddingTop: heightPixel(20)},
  rowWithGap100: {flexDirection: 'row', gap: 95},
  leftArrowIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  mainIconContainer: {gap: 10},
  mainIcon: {
    width: widthPixel(120),
    height: widthPixel(120),
    resizeMode: 'contain',
  },
  operationalHoursTextContainer: {marginLeft: widthPixel(-28)},
  operationalHoursText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  availabilityContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(20),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  selectAvailabilityText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#121212',
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: heightPixel(10),
  },
  rowWithGap5: {flexDirection: 'row', alignItems: 'center', gap: 7},
  uncheckedIcon: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
  selectAllText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
    paddingTop: heightPixel(3),
  },
  gap8: {gap: 8},
  startEndTimeText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  timeInputContainer: {
    width: widthPixel(90),
    height: heightPixel(38),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPixel(10),
  },
  timeInput: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
    color: '#ACACAC',
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  paddingTop15: {paddingTop: heightPixel(15)},
  dayRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWithGap10: {flexDirection: 'row', alignItems: 'center', gap: 10},
  dayText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#171717',
  },
  rowWithGap28: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  btnContainer: {
    alignSelf: 'center',
    paddingVertical: heightPixel(10),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#333333',
  },
});
