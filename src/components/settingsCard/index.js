import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {heightPixel, widthPixel} from '../../services/constants';
import {fontFamily} from '../../services/utilities/fonts';

const SettingsCard = ({item, isLastItem, navigation}) => {
  const handlePress = () => {
    if (item.route) {
      navigation.navigate(item.route);
    }
  };
  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <View key={item?.id} style={styles.container}>
        <Image source={item?.icon} style={styles.icon} />
        <Text style={isLastItem ? styles.titleRed : styles.title}>
          {item?.title}
        </Text>
      </View>
      {!isLastItem && <View style={styles.separator} />}
    </TouchableOpacity>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#0A0F0D',
    marginTop: heightPixel(2),
  },
  titleRed: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#FF0A0A',
    marginTop: heightPixel(2),
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E1E4E8',
    marginTop: heightPixel(10),
  },
});
