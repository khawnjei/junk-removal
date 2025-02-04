import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';
import ServiceProviderCard from '../../../components/serviceProviderCard';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';
import DynamicPopup from '../../../components/dynamicPopup';

const MakeOffer = ({navigation}) => {
  const [price, setPrice] = useState('');
  const [popup, setPopup] = useState(false);

  return (
    <View style={styles.container}>
      {popup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'Offer Sent'}
          route={routes.tab}
        />
      )}
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.headerSection}>
            <AppHeader
              title={'Make Offer'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.cardSection}>
            <ServiceProviderCard date={true} isTouchable={false} />
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Price</Text>
            <AppTextInput
              placeholder={'$10'}
              value={price}
              onChangeText={e => setPrice(e)}
              keyboardType={'numeric'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton title={'Submit'} onPress={() => setPopup(true)} />
      </View>
    </View>
  );
};

export default MakeOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    paddingHorizontal: widthPixel(20),
  },
  headerSection: {
    paddingTop: heightPixel(20),
  },
  cardSection: {
    paddingTop: heightPixel(20),
  },
  inputSection: {
    paddingTop: heightPixel(20),
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#1E222D',
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingVertical: heightPixel(10),
  },
});
