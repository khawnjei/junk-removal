import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';
import {heightPixel, widthPixel} from '../../services/constants';
import {appIcons} from '../../services/utilities/assets';

import AppTextInput from '../appTextInput';

const AboutProject = () => {
  const [selectedPopularItems, setSelectedPopularItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [itemName, setItemName] = useState('');

  const scrollRef = useRef(null);

  const popularItemsArr = [
    {id: 1, title: 'Mattress or Box Spring'},
    {id: 2, title: 'Dresser'},
    {id: 3, title: 'Bags of Junk'},
    {id: 4, title: 'Desk'},
    {id: 5, title: 'Recliner, Couch or Loveseat'},
    {id: 6, title: 'Treadmill'},
    {id: 7, title: 'Others'},
  ];

  const sizeOfProjectArr = [
    {id: 1, title: 'Single Item'},
    {id: 2, title: 'Multiple Items'},
    {id: 3, title: 'Room of Items'},
    {id: 4, title: 'Multiple Rooms'},
    {id: 5, title: 'Full Cleanout'},
    {id: 6, title: 'Pile of Items or Debris'},
  ];

  const togglePopularItem = id => {
    setSelectedPopularItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const selectSizeOfProject = id => {
    setSelectedSize(id);
  };

  const showInputForPopularItems = selectedPopularItems.includes(7);

  return (
    <View>
      <Text style={styles.instructionsText}>
        Tell us what junk you want removed
      </Text>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        {popularItemsArr.map(item => {
          const isSelected = selectedPopularItems.includes(item.id);
          return (
            <View key={item.id} style={styles.itemRow}>
              <TouchableOpacity onPress={() => togglePopularItem(item.id)}>
                <Image
                  source={
                    isSelected ? appIcons.checkedIcon : appIcons.uncheckedIcon
                  }
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          );
        })}
        {showInputForPopularItems && (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter Your Own*</Text>
            <AppTextInput
              placeholder={'Item Name Here'}
              value={itemName}
              onChangeText={e => setItemName(e)}
              onFocus={event => {
                scrollRef.current?.scrollToFocusedInput(event.target);
              }}
            />
          </View>
        )}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Size Of Project</Text>
          {sizeOfProjectArr.map(item => {
            const isSelected = selectedSize === item.id;
            return (
              <View key={item.id} style={styles.itemRow}>
                <TouchableOpacity onPress={() => selectSizeOfProject(item.id)}>
                  <Image
                    source={
                      isSelected ? appIcons.checkedIcon : appIcons.uncheckedIcon
                    }
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = {
  instructionsText: {
    color: '#666666',
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
  },
  container: {
    marginTop: heightPixel(20),
  },
  sectionTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: heightPixel(20),
  },
  iconStyle: {
    width: widthPixel(18),
    height: widthPixel(18),
    resizeMode: 'contain',
  },
  itemText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: '#777777',
    marginTop: heightPixel(-2),
  },
  inputContainer: {
    marginTop: heightPixel(15),
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#1E222D',
  },
  sectionContainer: {
    marginTop: heightPixel(15),
  },
};

export default AboutProject;
