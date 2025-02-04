import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../../services/constants';

import ServiceProviderCard from '../serviceProviderCard';

const AvailableRequests = () => {
  const navigation = useNavigation();
  return (
    <View style={{gap: 15}}>
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.bookingDetailsService)}
        price={true}
        date={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.bookingDetailsService)}
        price={true}
        date={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.bookingDetailsService)}
        price={true}
        date={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.bookingDetailsService)}
        price={true}
        date={true}
      />
    </View>
  );
};

export default AvailableRequests;
