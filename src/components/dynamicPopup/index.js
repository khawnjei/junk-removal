import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {heightPixel, widthPixel} from '../../services/constants';
import {fontFamily} from '../../services/utilities/fonts';
import {colors} from '../../services/utilities/colors';

const DynamicPopup = ({icon, title, text, route}) => {
  const navigation = useNavigation();
  const duration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (route) {
        navigation.replace(route);
      } else {
        navigation.goBack();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [navigation, route]);

  return (
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        <View style={styles.contentContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContainer: {
    width: widthPixel(284),
    height: heightPixel(300),
    backgroundColor: colors.white,
    borderRadius: 40,
    paddingVertical: heightPixel(40),
    paddingHorizontal: widthPixel(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: widthPixel(160),
    height: widthPixel(160),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.5),
    color: colors.theme,
    textAlign: 'center',
  },
  text: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: '#666666',
    textAlign: 'center',
  },
});

export default DynamicPopup;
