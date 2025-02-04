import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel, wp} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';

const Notifications = ({navigation}) => {
  const notificationArr = [
    {
      id: 1,
      icon: appIcons.updateIcon,
      title: 'Update',
      text: 'Your changes have been saved successfully.',
      time: '45 mins',
    },
    {
      id: 2,
      icon: appIcons.successIcon,
      title: 'Successful',
      text: 'Action completed successfully. Thank you!',
      time: '45 mins',
    },
    {
      id: 3,
      icon: appIcons.errorIcon,
      title: 'Error',
      text: 'Something went wrong. Please try again or contact support',
      time: '45 mins',
    },
    {
      id: 4,
      icon: appIcons.sendIcon,
      title: 'Send',
      text: 'Your request has been sent. We’ll handle it promptly.',
      time: '45 mins',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <AppHeader
            title={'Notification'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.notificationWrapper}>
            {notificationArr.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  key={item?.id}
                  style={styles.notificationCard}>
                  <View style={styles.notificationContent}>
                    <View style={styles.notificationHeader}>
                      <View style={styles.notificationTitleWrapper}>
                        <Image source={item?.icon} style={styles.icon} />
                        <Text style={styles.notificationTitle}>
                          {item?.title}
                        </Text>
                      </View>
                      <View>
                        <Image
                          source={appIcons.dotIcon}
                          style={styles.dotIcon}
                        />
                      </View>
                    </View>
                    <View style={styles.notificationBody}>
                      <Text style={styles.notificationText}>{item?.text}</Text>
                      <Text style={styles.notificationTime}>{item?.time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  notificationWrapper: {
    marginTop: heightPixel(20),
    gap: 15,
  },
  notificationCard: {
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    borderRadius: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  notificationContent: {
    gap: 10,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
  notificationTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  dotIcon: {
    width: widthPixel(8),
    height: widthPixel(8),
    resizeMode: 'contain',
  },
  notificationBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#666666',
    width: wp(65),
  },
  notificationTime: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
    color: '#666666',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
});
