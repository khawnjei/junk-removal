import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {fontFamily} from '../../services/utilities/fonts';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../../services/utilities/colors';
import {heightPixel, widthPixel, wp} from '../../services/constants';
import StripCalendar from '../stripCalendar';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const DateAndTime = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = id => {
    setSelectedTime(id);
  };

  const timeSlots = [
    {id: '1', time: '06:36 AM'},
    {id: '2', time: '07:34 AM'},
    {id: '3', time: '07:32 AM'},
    {id: '4', time: '07:44 AM'},
    {id: '5', time: '07:53 AM'},
    {id: '6', time: '06:51 AM'},
    {id: '7', time: '06:29 AM'},
    {id: '8', time: '07:51 AM'},
    {id: '9', time: '07:31 AM'},
    {id: '10', time: '07:14 AM'},
    {id: '11', time: '07:19 AM'},
    {id: '12', time: '07:24 AM'},
    {id: '13', time: '07:30 AM'},
    {id: '14', time: '07:40 AM'},
    {id: '15', time: '07:50 AM'},
  ];

  const splitTimeSlots = (slots, chunkSize) => {
    const result = [];
    for (let i = 0; i < slots.length; i += chunkSize) {
      result.push(slots.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedTimeSlots = splitTimeSlots(timeSlots, 4);

  return (
    <View>
      <Text style={styles.chooseDateTimeText}>Choose your date and time</Text>
      <View style={styles.calendarSectionContainer}>
        <Text style={styles.sectionTitleText}>Date</Text>
        <StripCalendar />
      </View>
      <View style={styles.timeSectionContainer}>
        <Text style={styles.sectionTitleText}>Time</Text>
        {chunkedTimeSlots.map((chunk, index) => (
          <View key={index} style={styles.timeSlotWrapper}>
            <View style={styles.timeSlotContainer}>
              {chunk.map(item => {
                return (
                  <TouchableOpacity
                    key={item?.id}
                    onPress={() => handleTimeSelect(item?.id)}
                    style={[
                      styles.timeSlotButton,
                      selectedTime === item?.id &&
                        styles.selectedTimeSlotButton,
                    ]}>
                    <Text
                      style={[
                        styles.timeSlotText,
                        selectedTime === item?.id &&
                          styles.selectedTimeSlotText,
                      ]}>
                      {item?.time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </View>
      <View style={styles.locationSectionContainer}>
        <Text style={styles.sectionTitleText}>Your Location</Text>
        <View style={styles.locationBox}>
          <View style={styles.locationDetailsWrapper}>
            <Image source={appIcons.markerIcon} style={styles.locationIcon} />
            <View>
              <Text style={styles.sectionTitleText}>Lahore Ring Road</Text>
              <Text style={styles.locationDescription}>
                Bankers Town, Lahore, Pakistan
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={appIcons.editIcon} style={styles.locationEditIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DateAndTime;
