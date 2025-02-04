import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';
import DynamicCard from '../../../components/dynamicCard';
import OffersCard from '../../../components/offersCard';

const OffersDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppHeader title={'Offer Detail'} onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.dynamicCardContainer}>
          <DynamicCard
            showTotalOffers={true}
            onPress={() => navigation.navigate(routes?.offersDetailPage)}
          />
        </View>
        <View style={styles.offersSection}>
          <Text style={styles.offersTitle}>Offers</Text>
          <OffersCard />
          <OffersCard />
          <OffersCard />
          <OffersCard />
          <OffersCard />
          <OffersCard />
          <OffersCard />
        </View>
      </ScrollView>
    </View>
  );
};

const renderItem = ({item}) => (
  <Image
    source={item.source}
    style={{
      width: wp(90),
      height: 200,
      resizeMode: 'contain',
    }}
  />
);

export default OffersDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
  },
  headerContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  dynamicCardContainer: {
    marginTop: heightPixel(20),
  },
  offersSection: {
    marginTop: heightPixel(20),
    gap: 10,
  },
  offersTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
  },
});
