import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../services/utilities/colors';
import {appImages} from '../../services/utilities/assets';
import {heightPixel, routes, widthPixel} from '../../services/constants';
import {fontFamily} from '../../services/utilities/fonts';

import DynamicCard from '../dynamicCard';
import {useNavigation} from '@react-navigation/native';

const Offers = () => {
  const navigation = useNavigation();
  return (
    <View style={{gap: 15}}>
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      <DynamicCard
        showTotalOffers={true}
        onPress={() => navigation.navigate(routes.offersDetails)}
      />
      {/* <View style={styles.templateContainer}>
        <Image source={appImages.templateImage} style={styles.templateImage} />
        <Text style={styles.templateText}>No Offers Yet</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  templateContainer: {
    alignSelf: 'center',
  },
  templateImage: {
    width: widthPixel(350),
    height: heightPixel(289),
    resizeMode: 'contain',
  },
  templateText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
    textAlign: 'center',
  },
});

export default Offers;
