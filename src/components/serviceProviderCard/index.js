import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {heightPixel, widthPixel, wp} from '../../services/constants';
import {appIcons, appImages} from '../../services/utilities/assets';
import {fontFamily} from '../../services/utilities/fonts';

const ServiceProviderCard = ({
  onPress,
  isTouchable = true,
  price = false,
  date = false,
  image,
  userInfo = false,
  offer = false,
  completed = false,
}) => {
  const CardComponent = isTouchable ? TouchableOpacity : View;
  const statusText = completed ? 'Completed' : offer ? 'Offer' : 'Upcoming';
  return (
    <CardComponent onPress={onPress} style={styles.cardContainer}>
      {image && (
        <View>
          <Image source={appImages.slierImageA} style={styles.image} />
        </View>
      )}
      {userInfo && (
        <View>
          <View style={styles.userInfoContainer}>
            <Image source={appIcons.userIcon} style={styles.userIcon} />
            <View>
              <Text style={styles.userName}>Alex Hales</Text>
              <View style={styles.upcomingTag}>
                <Text style={styles.upcomingText}>{statusText}</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
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
      {date && (
        <View style={styles.rowContainer}>
          <View style={styles.iconTextContainer}>
            <Image source={appIcons.calendarIcon} style={styles.icon} />
            <Text style={styles.textRegular}>12 July, 2022</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Image source={appIcons.timeIcon} style={styles.icon} />
            <Text style={styles.textMedium}>11:00 AM</Text>
          </View>
        </View>
      )}
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
      <View style={styles.rowContainer}>
        <Text style={styles.textRegular}>Location</Text>
        <Text style={styles.textMediumA}>Times Square NYC, Manhattan</Text>
      </View>
    </CardComponent>
  );
};

export default ServiceProviderCard;

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
  image: {
    width: '100%',
    height: heightPixel(160),
    borderRadius: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: heightPixel(10),
  },
  userIcon: {
    width: widthPixel(80),
    height: widthPixel(80),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  upcomingTag: {
    paddingVertical: heightPixel(6),
    paddingHorizontal: widthPixel(10),
    backgroundColor: colors.theme,
    borderRadius: 13,
  },
  upcomingText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: colors.white,
    textAlign: 'center',
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
  },
});
