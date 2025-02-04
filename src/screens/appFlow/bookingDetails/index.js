import React, {useState} from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel, wp} from '../../../services/constants';
import {appImages} from '../../../services/utilities/assets';

import AppHeader from '../../../components/appHeader';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import DynamicCard from '../../../components/dynamicCard';

const BookingDetails = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {id: 1, source: appImages.slierImageA},
    {id: 2, source: appImages.templateImage},
    {id: 3, source: appImages.projectTemplateImage},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <AppHeader
            title={'Booking Detail'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={wp(90)}
            itemWidth={wp(90)}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <Pagination
            activeDotIndex={activeSlide}
            dotsLength={images?.length}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.dynamicCardContainer}>
            <DynamicCard
              company={true}
              isTouchable={false}
              price={true}
              completed={true}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const renderItem = ({item}) => (
  <Image source={item.source} style={styles.carouselImage} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  carouselContainer: {
    paddingTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  paginationContainer: {
    paddingVertical: 0,
    marginTop: heightPixel(10),
    height: 10,
  },
  activeDot: {
    width: widthPixel(26),
    height: heightPixel(10),
    borderRadius: 8,
    marginHorizontal: widthPixel(-5),
    backgroundColor: '#07C7D1',
  },
  inactiveDot: {
    width: widthPixel(10),
    height: widthPixel(10),
    borderRadius: 8,
    backgroundColor: '#DBDBDB',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: heightPixel(10),
    paddingHorizontal: widthPixel(20),
  },
  dynamicCardContainer: {
    paddingTop: heightPixel(15),
    gap: 10,
  },
  carouselImage: {
    width: wp(90),
    height: 200,
    resizeMode: 'contain',
  },
});

export default BookingDetails;
