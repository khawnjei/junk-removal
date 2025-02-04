import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';
import {ScrollView} from 'react-native-gesture-handler';

import AppHeader from '../../../components/appHeader';
import ReviewCard from '../../../components/reviewCard';

const MyReviews = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.appHeaderContainer}>
          <AppHeader onPress={() => navigation.goBack()} title={'My Reviews'} />
        </View>
        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Reviews</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MyReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  appHeaderContainer: {
    marginTop: heightPixel(20),
  },

  reviewsContainer: {
    marginTop: heightPixel(20),
    gap: 10,
    flex: 1,
  },
  reviewsTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
  },
  scrollView: {
    paddingBottom: heightPixel(20),
    gap: 10,
    flexGrow: 1,
  },
});
