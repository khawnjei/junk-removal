import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {routes} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

const SelectedOperationalHours = ({navigation}) => {
  const weekdaysArr = [
    {id: 1, day: 'Mon'},
    {id: 2, day: 'Tues'},
    {id: 3, day: 'Wed'},
    {id: 4, day: 'Thurs'},
    {id: 5, day: 'Fri'},
    {id: 6, day: 'Sat'},
    {id: 7, day: 'Sun'},
  ];

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardScroll}>
        <View style={styles.paddingHorizontal20}>
          <View style={styles.paddingTop20}>
            <View style={styles.rowWithGap100}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={appIcons.leftArrowIcon}
                    style={styles.leftArrowIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Operational Hours</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes?.editOperationalHours)
                }>
                <Image
                  source={appIcons.editHoursIcon}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.paddingTop20}>
            <View style={styles.availabilityContainer}>
              <Text style={styles.selectAvailabilityText}>
                Select Availability
              </Text>
              <View style={styles.availabilityRow}>
                <View style={styles.rowWithGap5}>
                  <Text style={styles.selectAllText}>Select All</Text>
                </View>
                <View style={styles.gap8}>
                  <Text style={styles.startEndTimeText}>Start Time</Text>
                  <View style={styles.timeInputContainer}>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="09:30PM"
                      placeholderTextColor="#ACACAC"
                      editable={false}
                    />
                  </View>
                </View>
                <View style={styles.gap8A}>
                  <Text style={styles.startEndTimeText}>End Time</Text>
                  <View style={styles.timeInputContainer}>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="09:30PM"
                      placeholderTextColor="#ACACAC"
                      editable={false}
                    />
                  </View>
                </View>
              </View>
              {weekdaysArr.map(item => {
                return (
                  <View key={item?.id} style={styles.paddingTop15}>
                    <View style={styles.dayRowContainer}>
                      <View style={styles.rowWithGap10}>
                        <Text style={styles.dayText}>{item?.day}</Text>
                      </View>
                      <View style={styles.rowWithGap28}>
                        <View style={styles.timeInputContainer}>
                          <TextInput
                            style={styles.timeInput}
                            placeholder="09:30PM"
                            placeholderTextColor="#ACACAC"
                            editable={false}
                          />
                        </View>
                        <View style={styles.timeInputContainer}>
                          <TextInput
                            style={styles.timeInput}
                            placeholder="09:30PM"
                            placeholderTextColor="#ACACAC"
                            editable={false}
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
    </View>
  );
};

export default SelectedOperationalHours;
