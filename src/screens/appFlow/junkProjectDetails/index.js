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

const JunkProjectDetails = ({navigation}) => {
  const [cautionPopup, setCautionPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {id: 1, source: appImages.slierImageA},
    {id: 2, source: appImages.templateImage},
    {id: 3, source: appImages.projectTemplateImage},
  ];

  const handleNavigation = () => {
    setCautionPopup(false);
    navigation.navigate(routes.addReview);
  };

  return (
    <View style={styles.container}>
      {cautionPopup && (
        <CautionPopup
          icon={appIcons.cautionIcon}
          title={'Mark Job As Completed'}
          upperButton={'Completed'}
          lowerButton={'Not, Yet'}
          onPressUpperButton={handleNavigation}
          onPressLowerButton={() => setCautionPopup(false)}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <AppHeader
              title={'Junk project Detail'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View
            style={{
              paddingVertical: heightPixel(10),
            }}>
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
          <View style={styles.dynamicCardContainer}>
            <DynamicCard company={true} isTouchable={false} price={true} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Mark As Complete'}
          onPress={() => setCautionPopup(true)}
        />
      </View>
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

export default JunkProjectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
  },
  contentContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  dynamicCardContainer: {
    marginTop: heightPixel(20),
    gap: 10,
  },
  buttonContainer: {
    marginHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
  },
});
