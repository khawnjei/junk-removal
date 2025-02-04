const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel, wp} from '../../services/constants';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  chooseDateTimeText: {
    color: '#666666',
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
  },
  calendarSectionContainer: {
    marginTop: heightPixel(20),
    gap: 15,
  },
  sectionTitleText: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
  },
  timeSectionContainer: {
    marginTop: heightPixel(30),
    gap: 8,
  },
  timeSlotWrapper: {
    width: widthPixel(385),
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
    backgroundColor: colors.white,
    borderRadius: 10,
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
    marginBottom: heightPixel(10),
    marginLeft: widthPixel(2),
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlotButton: {
    width: widthPixel(90),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPixel(6),
    borderRadius: 10,
    borderWidth: 0,
  },
  selectedTimeSlotButton: {
    backgroundColor: '#FD9105',
    borderWidth: 2,
    borderColor: '#FD9105',
  },
  timeSlotText: {
    color: '#666666',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
  },
  selectedTimeSlotText: {
    color: 'white',
  },
  locationSectionContainer: {
    marginTop: heightPixel(20),
    gap: 10,
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
});
