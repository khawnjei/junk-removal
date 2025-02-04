import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel, wp} from '../../../services/constants';
import {appIcons, appImages} from '../../../services/utilities/assets';

import AppHeader from '../../../components/appHeader';

import ServiceProviderCard from '../../../components/serviceProviderCard';
import AppButton from '../../../components/button';
import CautionPopup from '../../../components/cautionPopup';
import DynamicPopup from '../../../components/dynamicPopup';

const OffersDetailService = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cautionPopup, setCautionPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleUpperButton = () => {
    setCautionPopup(false);
    setSuccessPopup(true);
  };

  const images = [
    {id: 1, source: appImages.slierImageA},
    {id: 2, source: appImages.templateImage},
    {id: 3, source: appImages.projectTemplateImage},
  ];
  return (
    <View style={styles.container}>
      {cautionPopup && (
        <CautionPopup
          title={'Are You Sure you Withdraw Offer'}
          upperButton={'Yes'}
          lowerButton={'No'}
          onPressUpperButton={handleUpperButton}
          onPressLowerButton={() => setCautionPopup(false)}
          icon={appIcons.cautionIcon}
        />
      )}
      {successPopup && (
        <DynamicPopup
          title={'Offer Withdraw Successfully!'}
          icon={appIcons.popupIcon}
        />
      )}
      <View style={styles.headerContainer}>
        <AppHeader
          title={'Booking Detail'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{paddingHorizontal: widthPixel(20)}}>
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
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.dynamicCardContainer}>
          <ServiceProviderCard
            isTouchable={false}
            userInfo={true}
            date={true}
            price={true}
            offer={true}
          />
        </View>
      </ScrollView>
      <View style={{alignSelf: 'center', paddingVertical: heightPixel(10)}}>
        <AppButton
          title={'Withdraw Offer'}
          onPress={() => setCautionPopup(true)}
        />
      </View>
    </View>
  );
};

const renderItem = ({item}) => (
  <Image source={item.source} style={styles.carouselImage} />
);

export default OffersDetailService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
    paddingTop: heightPixel(20),
  },
  headerContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
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
  carouselImage: {
    width: wp(90),
    height: 200,
    resizeMode: 'contain',
  },
});
