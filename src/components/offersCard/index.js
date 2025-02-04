import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../services/constants';

const OffersCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.companyInfo)}
        style={styles.cardTouchable}>
        <View style={styles.cardHeader}>
          <Image source={appIcons.companyIcon} style={styles.companyIcon} />
          <Text style={styles.companyName}>Company Name</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image source={appIcons.starIcon} style={styles.starIcon} />
          <Text style={styles.rating}>4.5</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <View style={styles.priceHeader}>
          <Image source={appIcons.priceIcon} style={styles.priceIcon} />
          <Text style={styles.priceText}>Price</Text>
        </View>
        <Text style={styles.priceValue}>$100</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectButtonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OffersCard;
