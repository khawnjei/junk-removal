import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {fontFamily} from '../../services/utilities/fonts';
import {colors} from '../../services/utilities/colors';
import {heightPixel, widthPixel} from '../../services/constants';

import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

const StripCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.calanderTopView}>
      <CalendarStrip
        scrollable
        onDateSelected={date => {
          setSelectedDate(date.format('YYYY-MM-DD'));
        }}
        selectedDate={moment().format('YYYY-MM-DD')}
        style={styles.calendarView}
        highlightDateContainerStyle={styles.highlightDateContainerStyle}
        daySelectionAnimation={styles.selectedStl}
        calendarColor={'white'}
        calendarHeaderStyle={{
          fontFamily: fontFamily.appTextRegular,
          color: '#666666',
          fontSize: responsiveFontSize(1.5),
          paddingTop: heightPixel(5),
        }}
        dateNameStyle={styles.dateNameStyle}
        dateNumberStyle={styles.dateNumberStyle}
        highlightDateNameStyle={styles.highlightDateNameStyle}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        disabledDateNameStyle={styles.grayClr}
        disabledDateNumberStyle={styles.grayClr}
        // iconContainer={{flex: 0.1}}
        minDate={new Date()}
      />
    </View>
  );
};

export default StripCalendar;

const styles = StyleSheet.create({
  calanderTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginLeft: widthPixel(5),
  },
  calendarView: {
    width: widthPixel(380),
    height: heightPixel(96),
    borderRadius: 16,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  highlightDateContainerStyle: {
    backgroundColor: '#FD9105',
    borderRadius: 10,
    width: widthPixel(40),
    height: heightPixel(40),
  },
  selectedStl: {
    type: 'border',
    duration: 200,
    borderWidth: 1,
    borderHighlightColor: '#FD9105',
  },
  dateNameStyle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: '#666666',
  },
  dateNumberStyle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  highlightDateNameStyle: {
    fontFamily: fontFamily.appTextRegular,
    color: colors.white,
    fontSize: responsiveFontSize(1.1),
  },
  highlightDateNumberStyle: {
    fontFamily: fontFamily.appTextRegular,
    color: colors.white,
    fontSize: responsiveFontSize(2),
  },
  grayClr: {
    color: '#666666',
  },
});
