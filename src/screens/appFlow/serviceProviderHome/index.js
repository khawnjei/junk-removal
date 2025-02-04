import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';

import ServiceProviderCard from '../../../components/serviceProviderCard';

const ServiceProviderHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.topSection}>
          <View style={styles.userSection}>
            <Image source={appIcons.userIcon} style={styles.userIcon} />
            <View>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.userName}>Andrew Ainsley</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes?.notifications)}>
            <Image
              source={appIcons.notificationIcon}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.requestsSection}>
          <Text style={styles.requestsTitle}>Requests</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.cardContainer}>
              <ServiceProviderCard
                image={true}
                onPress={() =>
                  navigation.navigate(routes?.requestedDetailsProvider)
                }
              />
              <ServiceProviderCard
                image={true}
                onPress={() =>
                  navigation.navigate(routes?.requestedDetailsProvider)
                }
              />
              <ServiceProviderCard
                image={true}
                onPress={() =>
                  navigation.navigate(routes?.requestedDetailsProvider)
                }
              />
              <ServiceProviderCard
                image={true}
                onPress={() =>
                  navigation.navigate(routes?.requestedDetailsProvider)
                }
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ServiceProviderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
  },
  topSection: {
    paddingTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(20),
  },
  userSection: {
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    width: widthPixel(48),
    height: widthPixel(48),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  welcomeText: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.8),
    color: '#8E8E8E',
  },
  userName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
  },
  notificationIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  requestsSection: {
    paddingTop: heightPixel(20),
    flex: 1,
  },
  requestsTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
    paddingHorizontal: widthPixel(20),
  },
  cardContainer: {
    paddingTop: heightPixel(10),
    gap: 10,
  },
});
