import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../../services/constants';

import ServiceProviderCard from '../serviceProviderCard';

const OfferedService = () => {
  const navigation = useNavigation();
  return (
    <View style={{gap: 15}}>
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.offersDetailService)}
        price={true}
        date={true}
        offer={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.offersDetailService)}
        price={true}
        date={true}
        offer={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.offersDetailService)}
        price={true}
        date={true}
        offer={true}
      />
      <ServiceProviderCard
        userInfo={true}
        onPress={() => navigation.navigate(routes?.offersDetailService)}
        price={true}
        date={true}
        offer={true}
      />
    </View>
  );
};

export default OfferedService;
