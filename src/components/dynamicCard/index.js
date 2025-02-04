import React from 'react';

import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../../services/utilities/colors';
import {heightPixel, widthPixel, wp} from '../../services/constants';
import {appIcons} from '../../services/utilities/assets';
import {fontFamily} from '../../services/utilities/fonts';

const DynamicCard = ({
  showTotalOffers = false,
  onPress,
  company,
  completed,
  isTouchable = true,
  price = false,
}) => {
  const CardComponent = isTouchable ? TouchableOpacity : View;
  return (
    <CardComponent onPress={onPress} style={styles.cardContainer}>
      {company && (
        <>
          <View style={styles.companyContainer}>
            <Image source={appIcons.companyIcon} style={styles.companyIcon} />
            <View>
              <Text style={styles.companyName}>Company Name</Text>
              <View style={styles.ratingContainer}>
                <Image source={appIcons.starIcon} style={styles.starIcon} />
                <Text style={styles.ratingText}>4.8 | 3,287 reviews</Text>
              </View>
              <TouchableOpacity style={styles.ongoingButton}>
                <Text style={styles.ongoingText}>
                  {completed ? 'Completed' : 'Ongoing'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
        </>
      )}
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <Image source={appIcons.sizeIcon} style={styles.icon} />
          <Text style={styles.textRegular}>Size</Text>
        </View>
        <Text style={styles.textMedium}>Single Item</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <Image source={appIcons.itemsIcon} style={styles.icon} />
          <Text style={styles.textRegular}>Project items</Text>
        </View>
        <Text style={styles.textMediumB}>Bags Of Junk</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <Image source={appIcons.calendarIcon} style={styles.icon} />
          <Text style={styles.textRegular}>12 july, 2022</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image source={appIcons.timeIcon} style={styles.icon} />
          <Text style={styles.textMedium}>11:00 AM</Text>
        </View>
      </View>
      {price && (
        <View style={styles.rowContainer}>
          <View style={styles.iconTextContainer}>
            <Image source={appIcons.priceIcon} style={styles.icon} />
            <Text style={styles.textRegular}>Price</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Text style={styles.textMedium}>$100</Text>
          </View>
        </View>
      )}
      {showTotalOffers && (
        <View style={styles.rowContainer}>
          <Text style={styles.textRegular}>Total Offers</Text>
          <Text style={styles.textMedium}>10</Text>
        </View>
      )}
      <View style={styles.rowContainer}>
        <Text style={styles.textRegular}>Location</Text>
        <Text style={styles.textMediumA}>Times Square NYC, Manhattan</Text>
      </View>
    </CardComponent>
  );
};

export default DynamicCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(20),
    borderRadius: 20,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  companyIcon: {
    width: widthPixel(100),
    height: widthPixel(100),
    resizeMode: 'contain',
  },
  companyName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  starIcon: {
    width: widthPixel(16),
    height: widthPixel(16),
    resizeMode: 'contain',
  },
  ratingText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#898989',
    marginTop: heightPixel(4),
  },
  ongoingButton: {
    width: widthPixel(115),
    height: heightPixel(28),
    backgroundColor: colors.theme,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPixel(8),
  },
  ongoingText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.white,
  },
  separator: {
    width: '100%',
    height: heightPixel(1),
    backgroundColor: '#C1C1C1',
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
  textRegular: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
  },
  textMedium: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  textMediumA: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  textMediumB: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
    // width: wp(30),
  },
});
