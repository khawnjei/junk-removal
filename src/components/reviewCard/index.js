import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {fontFamily} from '../../services/utilities/fonts';
import {heightPixel, widthPixel} from '../../services/constants';
import {appIcons} from '../../services/utilities/assets';

const ReviewCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={appIcons.userIcon} style={styles.userIcon} />
          <View>
            <Text style={styles.userName}>Charollette Hanlin</Text>
            <Text style={styles.reviewTime}>6 months ago</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Image source={appIcons.starIcon} style={styles.starIcon} />
          <Text style={styles.rating}>5</Text>
        </View>
      </View>
      <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es qui officia deserunt mollit anim id
          es ann
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    width: widthPixel(48),
    height: widthPixel(48),
    resizeMode: 'contain',
  },
  userName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
  },
  reviewTime: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#1B1B1E',
  },
  ratingContainer: {
    width: widthPixel(80),
    height: heightPixel(40),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FF552C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  starIcon: {
    width: widthPixel(16),
    height: widthPixel(16),
    resizeMode: 'contain',
  },
  rating: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#FF552C',
    marginTop: heightPixel(5),
  },
  reviewTextContainer: {
    marginTop: heightPixel(10),
  },
  reviewText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
  },
});
