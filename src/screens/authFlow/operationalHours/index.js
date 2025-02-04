import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {heightPixel, routes} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import AppButton from '../../../components/button';

const OperationalHours = ({navigation}) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const weekdaysArr = [
    {id: 1, day: 'Mon'},
    {id: 2, day: 'Tues'},
    {id: 3, day: 'Wed'},
    {id: 4, day: 'Thurs'},
    {id: 5, day: 'Fri'},
    {id: 6, day: 'Sat'},
    {id: 7, day: 'Sun'},
  ];

  const toggleDay = id => {
    setSelectedDays(prev =>
      prev.includes(id) ? prev.filter(dayId => dayId !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    if (selectedDays.length === weekdaysArr.length) {
      setSelectedDays([]);
    } else {
      setSelectedDays(weekdaysArr.map(day => day.id));
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(10)}}>
        <View style={styles.paddingHorizontal20}>
          <View style={styles.paddingTop20}>
            <View style={styles.rowWithGap100}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={appIcons.leftArrowIcon}
                  style={styles.leftArrowIcon}
                />
              </TouchableOpacity>
              <View style={styles.mainIconContainer}>
                <Image source={appIcons.mainIcon} style={styles.mainIcon} />
                <View style={styles.operationalHoursTextContainer}>
                  <Text style={styles.operationalHoursText}>
                    Operational Hours
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paddingTop20}>
            <View style={styles.availabilityContainer}>
              <Text style={styles.selectAvailabilityText}>
                Select Availability
              </Text>
              <View style={styles.availabilityRow}>
                <View style={styles.rowWithGap5}>
                  <TouchableOpacity onPress={toggleSelectAll}>
                    <Image
                      source={
                        selectedDays.length === weekdaysArr.length
                          ? appIcons.checkedIcon
                          : appIcons.uncheckedIcon
                      }
                      style={styles.uncheckedIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.selectAllText}>Select All</Text>
                </View>
                <View style={styles.gap8}>
                  <Text style={styles.startEndTimeText}>Start Time</Text>
                  <View style={styles.timeInputContainer}>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="09:30PM"
                      placeholderTextColor="#ACACAC"
                    />
                  </View>
                </View>
                <View style={styles.gap8}>
                  <Text style={styles.startEndTimeText}>End Time</Text>
                  <View style={styles.timeInputContainer}>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="09:30PM"
                      placeholderTextColor="#ACACAC"
                    />
                  </View>
                </View>
              </View>
              {weekdaysArr.map(item => {
                return (
                  <View key={item?.id} style={styles.paddingTop15}>
                    <View style={styles.dayRowContainer}>
                      <View style={styles.rowWithGap10}>
                        <TouchableOpacity onPress={() => toggleDay(item.id)}>
                          <Image
                            source={
                              selectedDays.includes(item.id)
                                ? appIcons.checkedIcon
                                : appIcons.uncheckedIcon
                            }
                            style={styles.uncheckedIcon}
                          />
                        </TouchableOpacity>
                        <Text style={styles.dayText}>{item?.day}</Text>
                      </View>
                      <View style={styles.rowWithGap28}>
                        <View style={styles.timeInputContainer}>
                          <TextInput
                            style={styles.timeInput}
                            placeholder="09:30PM"
                            placeholderTextColor="#ACACAC"
                          />
                        </View>
                        <View style={styles.timeInputContainer}>
                          <TextInput
                            style={styles.timeInput}
                            placeholder="09:30PM"
                            placeholderTextColor="#ACACAC"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnContainer}>
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate(routes.licenseRegA)}
        />
      </View>
    </View>
  );
};

export default OperationalHours;
