import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {appImages} from '../../../services/utilities/assets';
import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel, wp} from '../../../services/constants';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import AppHeader from '../../../components/appHeader';
import ServiceProviderCard from '../../../components/serviceProviderCard';
import AppButton from '../../../components/button';

const RequestedDetailsProvider = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {id: 1, source: appImages.slierImageA},
    {id: 2, source: appImages.templateImage},
    {id: 3, source: appImages.projectTemplateImage},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerSection}>
          <AppHeader
            title={'Request Detail Page'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: heightPixel(20),
          }}>
          <>
            <View style={styles.carouselSection}>
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
            <View style={styles.cardSection}>
              <ServiceProviderCard
                date={true}
                isTouchable={false}
                image={false}
              />
            </View>
          </>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Make Offer'}
          onPress={() => navigation.navigate(routes?.makeOffer)}
        />
      </View>
    </View>
  );
};

const renderItem = ({item}) => (
  <Image source={item.source} style={styles.carouselImage} />
);

export default RequestedDetailsProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
  },
  headerSection: {
    paddingTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  carouselSection: {
    paddingTop: heightPixel(15),
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
  cardSection: {
    paddingTop: heightPixel(20),
    paddingHorizontal: widthPixel(20),
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingVertical: heightPixel(10),
  },
  carouselImage: {
    width: wp(90),
    height: 200,
    resizeMode: 'contain',
  },
});
