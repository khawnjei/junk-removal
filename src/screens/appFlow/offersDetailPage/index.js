import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel, wp} from '../../../services/constants';
import {appIcons, appImages} from '../../../services/utilities/assets';

import AppHeader from '../../../components/appHeader';
import DynamicCard from '../../../components/dynamicCard';
import AppButton from '../../../components/button';
import CautionPopup from '../../../components/cautionPopup';
import DynamicPopup from '../../../components/dynamicPopup';

const OffersDetailPage = ({navigation}) => {
  const [cautionPopup, setCautionPopup] = useState(false);
  const [dynamicPopup, setDynamicPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {id: 1, source: appImages.slierImageA},
    {id: 2, source: appImages.templateImage},
    {id: 3, source: appImages.projectTemplateImage},
  ];

  const handleRequest = () => {
    setCautionPopup(false);
    setDynamicPopup(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <AppHeader
            title={'Offer Detail Page'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{paddingTop: heightPixel(10)}}>
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
            containerStyle={{
              paddingVertical: 0,
              marginTop: heightPixel(10),
              height: 10,
            }}
            dotStyle={{
              width: widthPixel(26),
              height: heightPixel(10),
              borderRadius: 8,
              marginHorizontal: widthPixel(-5),
              backgroundColor: '#07C7D1',
            }}
            inactiveDotStyle={{
              width: widthPixel(10),
              height: widthPixel(10),
              borderRadius: 8,
              backgroundColor: '#DBDBDB',
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
        <View style={styles.cardContainer}>
          <DynamicCard isTouchable={false} showTotalOffers={true} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Cancel Request'}
          onPress={() => setCautionPopup(true)}
        />
      </View>
      {cautionPopup && (
        <CautionPopup
          icon={appIcons.cautionIcon}
          title={'Are You Sure You Want Cancel Request'}
          upperButton={'Next'}
          lowerButton={'No'}
          onPressUpperButton={handleRequest}
          onPressLowerButton={() => setCautionPopup(false)}
        />
      )}
      {dynamicPopup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'Request Canceled Successfully'}
          route={routes?.tab}
        />
      )}
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

export default OffersDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  cardContainer: {
    marginTop: heightPixel(20),
    gap: 10,
  },
  buttonContainer: {
    marginHorizontal: widthPixel(15),
    paddingBottom: heightPixel(10),
  },
  imageView: {
    width: widthPixel(390),
    height: heightPixel(350),
    borderRadius: 12,
  },
  dotStyle: {
    width: widthPixel(8),
    height: widthPixel(8),
    borderRadius: widthPixel(10),
    marginLeft: widthPixel(8),
  },
});
