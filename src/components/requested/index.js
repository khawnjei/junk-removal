import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../services/utilities/colors';
import {routes} from '../../services/constants';

import DynamicCard from '../dynamicCard';

const Requested = () => {
  const navigation = useNavigation();
  return (
    <View style={{gap: 15}}>
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
      <DynamicCard
        showTotalOffers={false}
        onPress={() => navigation.navigate(routes.requestedDetails)}
      />
    </View>
  );
};

export default Requested;
