import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';

import AppHeader from '../../../components/appHeader';
import ServiceProviderCard from '../../../components/serviceProviderCard';

const MyHistoryProvider = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <AppHeader onPress={() => navigation.goBack()} title={'My History'} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.cardContainer}>
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
            <ServiceProviderCard
              onPress={() =>
                navigation.navigate(routes?.bookingDetailsProvider)
              }
              price={true}
              userInfo={true}
              date={true}
              completed={true}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyHistoryProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    // marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  cardContainer: {
    marginTop: heightPixel(20),
    gap: 15,
  },
});
