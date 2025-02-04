import React from 'react';

import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {appIcons} from '../../services/utilities/assets';
import {widthPixel} from '../../services/constants';

const AuthHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.leftArrowContainer}>
        <Image source={appIcons.leftArrowIcon} style={styles.leftArrowIcon} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={appIcons.mainIcon} style={styles.mainIcon} />
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  leftArrowContainer: {
    position: 'absolute',
    left: 0,
  },
  leftArrowIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIcon: {
    width: widthPixel(120),
    height: widthPixel(120),
    resizeMode: 'contain',
  },
});
