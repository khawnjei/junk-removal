import React from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';

const HelpCenter = ({navigation}) => {
  const helpCenterArr = [
    {
      id: 1,
      title: 'Chat With us',
      textA: 'Our friendly team is here to help.',
      textB: 'help@JunkRemoval.com',
      icon: appIcons.helpIconB,
    },
    {
      id: 2,
      title: 'Phone',
      textA: 'Lorem ipsum dolor sit amet.',
      textB: '+1(555)  000-0000',
      icon: appIcons.helpIconA,
    },
  ];

  const socialArr = [
    {
      id: 1,
      icon: appIcons.facebookIcon,
    },
    {
      id: 2,
      icon: appIcons.twitterIcon,
    },
    {
      id: 3,
      icon: appIcons.linkedinIcon,
    },
    {
      id: 4,
      icon: appIcons.siteIcon,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <AppHeader
            onPress={() => navigation.goBack()}
            title={'Help Center'}
          />
        </View>
        {helpCenterArr.map(item => (
          <View key={item?.id} style={styles.itemContainer}>
            <View style={styles.itemRow}>
              <Image source={item?.icon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.textA}>{item?.textA}</Text>
                <Text style={styles.textB}>{item?.textB}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.socialContainer}>
        {socialArr.map(item => {
          return (
            <TouchableOpacity key={item?.id} style={styles.iconContainer}>
              <Image source={item?.icon} style={styles.socialIcon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  header: {
    marginTop: heightPixel(20),
  },
  itemContainer: {
    marginTop: heightPixel(20),
  },
  itemRow: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    width: widthPixel(48),
    height: widthPixel(48),
    resizeMode: 'contain',
  },
  textContainer: {
    gap: 3,
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#1E222D',
  },
  textA: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.8),
    color: '#666666',
  },
  textB: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#1E222D',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
    paddingBottom: heightPixel(50),
  },
  iconContainer: {
    width: widthPixel(60),
    height: widthPixel(60),
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
  },
});

export default HelpCenter;
